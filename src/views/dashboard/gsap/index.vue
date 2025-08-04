<template>
  <div class="flex flex-wrap gap-5 items-center">
    <!-- use v-gsap directives -->
    <!-- src\directives\v-gsap.ts -->
    <div class="box" v-gsap="{ from: { opacity: 0, y: -50 }, to: { opacity: 1, y: 0, duration: 1 } }">
      Animated Title
    </div>
  </div>

  <!-- Scroll timeline animation -->
  <ScrollTimeline />

</template>

<script setup lang="ts">
import ScrollTimeline from '@/components/custom/ScrollTimeline.vue';

</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: #0d63f8;
  border-radius: 10px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}
</style>
