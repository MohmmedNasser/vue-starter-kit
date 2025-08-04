<script lang="ts">
export const description = 'A sidebar that collapses to icons.'
export const iframeHeight = '800px'
export const containerClass = 'w-full h-full'
</script>


<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import DarkModeMenu from '@/components/custom/DarkModeMenu.vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbsMap: Record<string, string> = {
  '/': 'Home',
  '/buttons': 'Buttons',
  '/forms': 'Forms',
  '/table': 'Table',
  '/data-table': 'Data Table',
  '/i18n': 'I18n',
  '/axios': 'Axios',
  '/unhead': 'Unhead',
  '/vue-toastification': 'Vue Toastification',
  '/swiper': 'Swiper Slider',
  '/carousel': 'Vue 3 Carousel',
  '/leaflet': 'Leaflet',
  '/echarts': 'Echarts',
  '/motion': 'Motion',
  '/gsap': 'Gsap',
}
</script>

<template>
  <SidebarProvider>
    <AppSidebar />

    <SidebarInset>
      <header class="flex h-16 items-center justify-between gap-2 border-b">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <div orientation="vertical" class="h-4 w-[1px] bg-gray-200 block" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <!-- {{ breadcrumbsMap[route.path] || 'Page' }} -->
                  <slot name="breadcrumb" />
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div class="me-5">
          <DarkModeMenu />
        </div>
      </header>

      <div class="flex flex-1 flex-col gap-4 p-4">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
