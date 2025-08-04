<template>
  <section class="section">
    <h2 class="title" ref="titleRef">ScrollTrigger + Timeline</h2>
    <div class="box red" ref="redBox">Red</div>
    <div class="box blue" ref="blueBox">Blue</div>
    <div class="box green" ref="greenBox">Green</div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { useGsapScroll } from "@/composables/useGsapScroll"

const titleRef = ref<HTMLElement | null>(null)
const redBox = ref<HTMLElement | null>(null)
const blueBox = ref<HTMLElement | null>(null)
const greenBox = ref<HTMLElement | null>(null)

const { gsap, ScrollTrigger } = useGsapScroll()

onMounted(() => {
  if (titleRef.value && redBox.value && blueBox.value && greenBox.value) {

    // ✅ Timeline مرتبط بالسكرول
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.value,
        start: "top center",      // يبدأ عند وصول الـ title لمنتصف الشاشة
        end: "+=500",             // يظل 500px من السكروول
        scrub: true,              // يجعل التحريك مربوط بالسكرول
        pin: true,                // يثبت العنوان أثناء الحركة
        markers: true             // ✅ لتجربة أفضل (يعرض نقاط البداية والنهاية)
      }
    })

    gsap.from(redBox.value, {
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: redBox.value,
        start: "top 90%",    // يبدأ الأنيميشن قبل أن يكون العنصر وسط الشاشة
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(blueBox.value, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: blueBox.value,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(greenBox.value, {
      x: 0,
      scale: 0,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: blueBox.value,
        start: "top 50%",
        toggleActions: "play none none reverse"
      }
    })

    // ✅ التسلسل
    tl.from(titleRef.value, { opacity: 0, y: -50, duration: 1 })
  }
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.section {
  height: 250vh;
  padding: 100px;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 50px;
}

.box {
  width: 150px;
  height: 150px;
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: white;
  border-radius: 12px;
}

.red {
  background: crimson;
}

.blue {
  background: royalblue;
}

.green {
  background: seagreen;
}
</style>
