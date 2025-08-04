<script setup lang="ts">

import { type Component, ref } from 'vue'


import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

const props = defineProps<{
  teams: {
    name: string
    logo: Component
    plan: string
  }[]
}>()

const activeTeam = ref(props.teams[0])
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg"
        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
        <router-link to="/" class="flex items-center gap-2">
          <div
            class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <component :is="activeTeam.logo" class="size-4" />
          </div>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-medium">
              {{ activeTeam.name }}
            </span>
            <span class="truncate text-xs">{{ activeTeam.plan }}</span>
          </div>
        </router-link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
