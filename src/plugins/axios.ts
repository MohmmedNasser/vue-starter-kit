import axios from 'axios'
import router from '@/router' // 👈 لو عندك Vue Router

// 🔹 أنشئ instance خاص بمشروعك
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // ضع API الأساسي هنا
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 🔹 Request Interceptor (لإضافة Authorization Token مثلًا)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 🔹 Response Interceptor (للتعامل مع الأخطاء)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status

    switch (status) {
      case 400:
        console.warn('Bad Request - تحقق من البيانات المرسلة')
        break

      case 401:
        console.error('Unauthorized - إعادة توجيه لصفحة تسجيل الدخول')
        router.push('/login') // 👈 توجيه المستخدم لصفحة تسجيل الدخول
        break

      case 403:
        console.warn('Forbidden - ليس لديك صلاحيات')
        router.push('/403') // 👈 صفحة صلاحيات
        break

      case 404:
        console.warn('Not Found - الصفحة غير موجودة')
        router.push('/404') // 👈 صفحة 404 مخصصة
        break

      case 422:
        console.warn('Validation Error - تحقق من الحقول')
        break

      case 429:
        console.warn('Too Many Requests - حاول لاحقًا')
        break

      case 500:
        console.error('Server Error - حدث خطأ من السيرفر')
        router.push('/500') // 👈 صفحة خطأ داخلي
        break

      default:
        console.error(`Unexpected Error (status: ${status})`, error)
    }

    return Promise.reject(error)
  }
)


export default api
