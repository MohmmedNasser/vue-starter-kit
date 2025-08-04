<script setup lang="ts">
import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type ColumnDef,
  type SortingState,
  type VisibilityState,
  type Table as TanStackTable,
} from '@tanstack/vue-table'
import { ref, type Ref } from 'vue'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-vue-next'

// Interface للبيانات المتوقعة
interface TableData {
  id: number
  first_name: string
  last_name: string
  email: string
  title: string
  role: string
  created_at: string
}

// Props interface
interface Props {
  data: TableData[]
  columns: ColumnDef<TableData>[]
}

// تعريف الـ props مع أنواع البيانات
const props = defineProps < Props > ()

// State variables مع أنواع البيانات المحددة
const sorting: Ref<SortingState> = ref([])
const filter: Ref<string> = ref('')
const columnVisibility: Ref<VisibilityState> = ref({})

// البيانات كـ reactive reference
const data: Ref<TableData[]> = ref(props.data)

// إعداد الجدول مع أنواع البيانات المحددة
const table: TanStackTable<TableData> = useVueTable({
  data: data.value,
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onColumnVisibilityChange: (updater: VisibilityState | ((old: VisibilityState) => VisibilityState)) => {
    if (typeof updater === 'function') {
      columnVisibility.value = updater(columnVisibility.value)
    } else {
      columnVisibility.value = updater
    }
  },
  state: {
    get sorting() {
      return sorting.value
    },
    get globalFilter() {
      return filter.value
    },
    get columnVisibility() {
      return columnVisibility.value
    },
  },
  onSortingChange: (updater: SortingState | ((old: SortingState) => SortingState)) => {
    sorting.value = typeof updater === 'function' ? updater(sorting.value) : updater
  },
})

// دالة لتغيير حجم الصفحة
const setPageSize = (size: number): void => {
  table.setPageSize(size)
}

// دالة لتغيير رقم الصفحة
const setPageIndex = (index: number): void => {
  table.setPageIndex(index)
}

// دالة للانتقال للصفحة السابقة
const previousPage = (): void => {
  table.previousPage()
}

// دالة للانتقال للصفحة التالية
const nextPage = (): void => {
  table.nextPage()
}
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">

        <div class="mt-4 flex flex-wrap justify-between gap-5 items-center">
          <div>
            <input type="text" v-model="filter" placeholder="Search..." class="border border-gray-500 p-2 rounded" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" class="ml-auto">
                Columns
                <ChevronDown class="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
                :key="column.id" class="capitalize" :modelValue="column.getIsVisible()" @update:modelValue="(value: boolean) => {
                  column.toggleVisibility(!!value)
                }">
                {{ column.columnDef.header }}
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>

        <div class="table-auto min-w-full overflow-x-auto relative inline-block py-2">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                <th scope="col" v-for="header in headerGroup.headers" :key="header.id"
                  class="px-1 py-3.5 text-left text-sm font-semibold text-gray-900"
                  :class="{ 'cursor-pointer select-none': header.column.getCanSort() }"
                  @click="header.column.getToggleSortingHandler()?.($event)">
                  <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />

                  <span v-if="header.column.getIsSorted()">
                    {{ header.column.getIsSorted() === 'asc' ? '🔼' : '🔽' }}
                  </span>
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200" v-if="table.getRowModel().rows?.length">
              <tr v-for="row in table.getRowModel().rows" :key="row.id">
                <td v-for="cell in row.getVisibleCells()" :key="cell.id"
                  class="whitespace-nowrap px-1 py-4 text-sm text-gray-500">
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </td>
              </tr>
            </tbody>

            <tbody v-else>
              <tr>
                <td class="h-24 text-center" :colspan="props.columns.length">
                  No results.
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

      <div class="mt-4">
        <span class="text-sm text-gray-700">
          Page {{ table.getState().pagination.pageIndex + 1 }} of
          {{ table.getPageCount() }} | {{ table.getFilteredRowModel().rows.length }} results
        </span>
      </div>

      <div class="mt-4 flex items-center space-x-2">
        <button
          class="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          @click="setPageSize(5)">
          Page size 5
        </button>
        <button
          class="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          @click="setPageSize(10)">
          Page size 10
        </button>
        <button
          class="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          @click="setPageSize(20)">
          Page size 20
        </button>
      </div>

      <div class="mt-4 space-x-5 flex items-center">
        <button
          class="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          @click="setPageIndex(0)">
          First Page
        </button>

        <button
          class="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          @click="setPageIndex(table.getPageCount() - 1)">
          Last Page
        </button>

        <button
          class="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          @click="previousPage()" :disabled="!table.getCanPreviousPage()">
          Prev Page
        </button>

        <button
          class="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          @click="nextPage()" :disabled="!table.getCanNextPage()">
          Next Page
        </button>

      </div>

    </div>
  </div>
</template>
