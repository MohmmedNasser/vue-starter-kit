import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/dashboard/index.vue'),
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('../views/dashboard/buttons/index.vue'),
    },
    {
      path: '/forms',
      name: 'Forms',
      component: () => import('../views/dashboard/forms/index.vue'),
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('../views/dashboard/table/index.vue'),
    },
    {
      path: '/data-table',
      name: 'Data Table',
      component: () => import('../views/dashboard/table/data-tabel.vue'),
    },
    {
      path: '/i18n',
      name: 'I18n',
      component: () => import('../views/dashboard/i18n/index.vue'),
    },
    {
      path: '/axios',
      name: 'Axios',
      component: () => import('../views/dashboard/axios/index.vue'),
    },
    {
      path: '/unhead',
      name: 'Unhead',
      component: () => import('../views/dashboard/unhead/index.vue'),
      // meta: { title: 'unhead Page', description: 'Welcome to the unhead page' }
    },
    {
      path: '/vue-toastification',
      name: 'Toastification',
      component: () => import('../views/dashboard/toastification/index.vue'),
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: () => import('../views/dashboard/swiper/index.vue'),
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: () => import('../views/dashboard/carousel/index.vue'),
    },
    {
      path: '/leaflet',
      name: 'Leaflet',
      component: () => import('../views/dashboard/leaflet/index.vue'),
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: () => import('../views/dashboard/echarts/index.vue'),
    },
    {
      path: '/motion',
      name: 'Motion',
      component: () => import('../views/dashboard/motion/index.vue'),
    },
    {
      path: '/gsap',
      name: 'Gsap',
      component: () => import('../views/dashboard/gsap/index.vue'),
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () => import('../views/dashboard/blank/index.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia persisted state',
      component: () => import('../views/dashboard/pinia/index.vue'),
    },
  ],
})

export default router
