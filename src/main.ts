import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import english from './langs/english'
import arabic from './langs/arabic'
import { createHead } from '@unhead/vue/client'
import Toast from "vue-toastification";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'leaflet/dist/leaflet.css'
import installECharts from '@/plugins/echarts'
import { MotionPlugin } from '@vueuse/motion'
import { vGsap } from '@/directives/v-gsap'

import "vue-toastification/dist/index.css";

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en',
  fallbackLocale: 'ar',
  messages: {
    'en': english.messages,
    'ar': arabic.messages,
  },
})

// const toastOptions = {
//   timeout: 2000,
//   position: "bottom-right",
//   pauseOnHover: true,
//   closeOnClick: true,
//   draggable: true,
//   draggablePercent: 0.6,
//   showCloseButtonOnHover: false,
//   hideProgressBar: false,
//   closeButton: 'button',
//   icon: true,
//   rtl: false,
// };

const app = createApp(App)
const head = createHead()
const pinia = createPinia()
installECharts(app)
pinia.use(piniaPluginPersistedstate)
app.directive('gsap', vGsap)
app.use(MotionPlugin)
// app.use(Toast, toastOptions)
app.use(Toast)
app.use(pinia)
app.use(router)
app.use(head)
app.use(i18n)
app.mount('#app')
