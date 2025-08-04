import type { Directive } from 'vue'
import { gsap } from 'gsap'

export const vGsap: Directive = {
  mounted(el, binding) {
    const { value } = binding
    // مثال: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0, duration: 1 } }
    if (value?.from) gsap.from(el, value.from)
    if (value?.to) gsap.to(el, value.to)
  }
}
