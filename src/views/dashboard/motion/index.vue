<template>
  <div class=" flex flex-wrap gap-5 items-center">
    <div class="box" v-motion-slide-visible-once-bottom></div>
    <div class="box" v-motion-slide-visible-once-top></div>

    <div class="box" v-motion :initial="{
      y: 100,
      opacity: 0,
    }" :enter="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 300,
        type: 'keyframes',
        ease: 'easeIn',
      },
    }">
    </div>

    <div class="box" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }" :hovered="{ scale: 1.2 }" :delay="200" :duration="500">
      Hover Me
    </div>

    <div class="box" v-motion :initial="{
      scale: 1,
    }" :enter="{
      scale: 1.2,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
      },
    }">
    </div>

    <div class="box" v-motion :initial="{
      x: 0,
    }" :hovered="{
      x: 20,
      transition: {
        type: 'spring',
        stiffness: 500,
      },
    }">
      Hover Me
    </div>
  </div>
  <div class="min-h-screen"> </div>
  <div class="flex flex-wrap gap-5 items-center">

    <div class="box" v-motion :initial="{ opacity: 0, scale: 0.2 }" :visible="{
      opacity: 1,
      scale: 1
    }">
      visible
    </div>

    <div class="box" v-motion :initial="{ opacity: 0, x: 100, }" :visibleOnce="{
      opacity: 1,
      x: 0,
    }">
      visibleOnce
    </div>
  </div>

</template>

<script setup lang="ts">


</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
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
