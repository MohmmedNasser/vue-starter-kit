<template>
  <Swiper @swiper="onSwiper" @slideChange="onSlideChange" :spaceBetween="spaceBetween || 10"
    :slidesPerView="slidesPerView || 1" :modules="[Autoplay, Pagination, Navigation]" lazy
    :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }" :loop="false"
    :pagination="{ el: '.hero-pagination', clickable: true }" navigation :breakpoints="{
      992: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15
      }
    }">
    <SwiperSlide v-for="slide, index in slides" :key="index">
      <img :src="slide.image" class="w-full h-64 object-cover rounded-lg" />
    </SwiperSlide>

    <div class="hero-pagination"></div>

    <!--
    <div class="carousel__next">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel__next">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
    <div class="carousel__prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel__prev">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </div> -->

  </Swiper>

</template>

<script setup lang="ts">
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Slide {
  image: string
}

defineProps<{
  slides: Slide[]
  slidesPerView?: number
  spaceBetween?: number
}>()

function onSwiper(swiper: SwiperInstance) {
  console.log('✅ Swiper initialized:', swiper)
}

function onSlideChange() {
  console.log('📌 Slide changed')
}

</script>

<style scoped></style>
