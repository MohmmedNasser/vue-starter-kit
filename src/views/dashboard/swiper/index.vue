<template>
  <section class="max-w-5xl">
    <div>
      <BaseSlider :slides="swiperList" :slidesPerView="1" :spaceBetween="10" />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseSlider from '@/components/custom/BaseSlider.vue';

const swiperList = [
  {
    image: 'https://placehold.co/400',
  },
  {
    image: 'https://placehold.co/400',
  },
  {
    image: 'https://placehold.co/400',
  },
  {
    image: 'https://placehold.co/400',
  },
  {
    image: 'https://placehold.co/400',
  },
  {
    image: 'https://placehold.co/400',
  },

];

</script>

<style scoped></style>
