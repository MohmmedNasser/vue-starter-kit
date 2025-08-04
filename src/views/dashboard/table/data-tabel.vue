<template>
  <div>
    <TableTanstack :data="people" :columns="columnsPeople" />
  </div>

  <!-- <div class="my-8">
    <TableTanstack :data="cars" :columns="columnsCars" />
  </div> -->
</template>

<script setup lang="ts">
// import EditButton from '@/components/TableButton.vue';
import { format } from "date-fns";
import { h } from 'vue';
import { Checkbox } from '@/components/ui/checkbox'
import DropdownAction from '@/components/DataTableDropDown.vue'

import people from '@/mockDataPeople.json'
import cars from '@/mockDataCars.json'
import { createColumnHelper, type ColumnDef } from '@tanstack/vue-table';
import TableTanstack from "../../../components/custom/TableTanstack.vue";


interface TableData {
  id: number
  first_name: string
  last_name: string
  email: string
  title: string
  role: string
  created_at: string
}

const columnHelper = createColumnHelper<TableData>();

const columnsPeople: ColumnDef<TableData>[] = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'modelValue': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:modelValue': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
    }),
    cell: ({ row }) => {
      return h(Checkbox, {
        'modelValue': row.getIsSelected(),
        'onUpdate:modelValue': value => row.toggleSelected(!!value),
        'ariaLabel': 'Select row',
      })
    },
    enableSorting: false,
    enableHiding: false,
  }),
  {
    header: 'ID',
    accessorKey: 'id',
    enableSorting: false,
  },
  {
    header: 'First name',
    accessorKey: 'first_name',
  },
  {
    header: 'Last name',
    accessorKey: 'last_name',
  },
  {
    header: 'Name',
    accessorFn: (row: { first_name: string; last_name: string }) => `${row.first_name} ${row.last_name}`,
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Role',
    accessorKey: 'role',
  },
  {
    header: 'Created At',
    accessorKey: 'created_at',
    cell: (info: any) => format(new Date(info.getValue()), 'MMM d, yyyy'),
    // cell: ({ cell }) => {
    //   const date = new Date(cell.getValue());
    //   return date.toLocaleDateString('en-US', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //   });
    // },
  },

  // {
  //   header: 'Edit',
  //   accessorKey: 'Edit',
  //   enableSorting: false,
  //   cell: ({ row }) => h(EditButton, { id: row.original.id }),
  // }

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }: { row: any }) => {
      const payment = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        payment,
      }))
    },
  },

]


const columnsCars = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableSorting: false,
  },
  {
    accessorKey: 'car_make',
    header: 'Car Make',
  },
  {
    accessorKey: 'car_model',
    header: 'Car Model',
  },
  {
    accessorKey: 'car_year',
    header: 'Year',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
]


</script>

<style scoped></style>
