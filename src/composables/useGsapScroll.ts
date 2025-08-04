import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

let isRegistered = false

export function useGsapScroll() {
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger)
    isRegistered = true
  }

  return { gsap, ScrollTrigger }
}
