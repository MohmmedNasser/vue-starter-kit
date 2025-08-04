<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  MousePointerClick,
  Table,
  Languages,
  Braces,
  ScanSearch,
  Megaphone,
  GalleryHorizontal,
  ChartArea,
  Activity,
  Hand,
  StickyNote,
  Save
} from 'lucide-vue-next'
import NavMain from '@/components/NavMain.vue'
import NavProjects from '@/components/NavProjects.vue'
import NavUser from '@/components/NavUser.vue'
import TeamSwitcher from '@/components/TeamSwitcher.vue'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Mohammed Nasser',
      logo: GalleryVerticalEnd,
      plan: 'Vue Starter Kit',
    },
  ],
  navMain: [
    {
      title: 'Buttons',
      url: '#',
      icon: MousePointerClick,
      // isActive: true,
      items: [
        {
          title: 'Custom buttons',
          url: '/buttons',
        },
      ],
    },
    {
      title: 'Forms with Validation',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Forms',
          url: '/forms',
        },
      ],
    },
    {
      title: 'Tables',
      url: '#',
      icon: Table,
      items: [
        {
          title: 'Table',
          url: '/table',
        },
        {
          title: 'Data Table',
          url: '/data-table',
        },
      ],
    },
    {
      title: 'i18n',
      url: '#',
      icon: Languages,
      items: [
        {
          title: 'Languages',
          url: '/i18n',
        },
      ],
    },
    {
      title: 'Axios',
      url: '#',
      icon: Braces,
      items: [
        {
          title: 'Axios',
          url: '/axios',
        },
      ],
    },
    {
      title: 'Unhead/vue',
      url: '#',
      icon: ScanSearch,
      items: [
        {
          title: 'Unhead',
          url: '/unhead',
        },
      ],
    },
    {
      title: 'Vue Toastification',
      url: '#',
      icon: Megaphone,
      items: [
        {
          title: 'Toastification',
          url: '/vue-toastification',
        },
      ],
    },
    {
      title: 'Slider',
      url: '#',
      icon: GalleryHorizontal,
      items: [
        {
          title: 'swiper',
          url: '/swiper',
        },
        {
          title: 'Vue 3 Carousel',
          url: '/carousel',
        },
      ],
    },
    {
      title: 'Maps',
      url: '#',
      icon: Map,
      items: [
        {
          title: 'Leaflet',
          url: '/leaflet',
        },
      ],
    },
    {
      title: 'Charts',
      url: '#',
      icon: ChartArea,
      items: [
        {
          title: 'Echarts',
          url: '/echarts',
        },
      ],
    },
    {
      title: 'Motion',
      url: '#',
      icon: Activity,
      items: [
        {
          title: 'Vueuse motion',
          url: '/motion',
        },
      ],
    },
    {
      title: 'Gsap',
      url: '#',
      icon: Hand,
      items: [
        {
          title: 'GSAP',
          url: '/gsap',
        },
      ],
    },
    {
      title: 'Pinia',
      url: '#',
      icon: Save,
      items: [
        {
          title: 'pinia persisted state',
          url: '/pinia',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Blank Page',
      url: '/blank',
      icon: StickyNote,
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.projects" />
    </SidebarContent>
    <!-- <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail /> -->
  </Sidebar>
</template>
