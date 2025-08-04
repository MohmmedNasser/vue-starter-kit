<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const carousel = [
  {
    image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?_gl=1*zhoj0j*_ga*MTY4MDQ0Nzk3Mi4xNzUxNTM5MTUz*_ga_8JE65Q40S6*czE3NTQxMzg4MjQkbzUkZzEkdDE3NTQxMzkwODIkajM2JGwwJGgw',
  },
  {
    image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?_gl=1*19lv3lm*_ga*MTY4MDQ0Nzk3Mi4xNzUxNTM5MTUz*_ga_8JE65Q40S6*czE3NTQxMzg4MjQkbzUkZzEkdDE3NTQxMzg5OTgkajYwJGwwJGgw',
  },
  {
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?_gl=1*byfhxi*_ga*MTY4MDQ0Nzk3Mi4xNzUxNTM5MTUz*_ga_8JE65Q40S6*czE3NTQxMzg4MjQkbzUkZzEkdDE3NTQxMzkwMjIkajM2JGwwJGgw',
  },
  {
    image: 'https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?_gl=1*l0dso*_ga*MTY4MDQ0Nzk3Mi4xNzUxNTM5MTUz*_ga_8JE65Q40S6*czE3NTQxMzg4MjQkbzUkZzEkdDE3NTQxMzkwMjUkajMzJGwwJGgw',
  },
  {
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?_gl=1*l0dso*_ga*MTY4MDQ0Nzk3Mi4xNzUxNTM5MTUz*_ga_8JE65Q40S6*czE3NTQxMzg4MjQkbzUkZzEkdDE3NTQxMzkwMjUkajMzJGwwJGgw',
  },
  {
    image: 'https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?_gl=1*18ijfgb*_ga*MTY4MDQ0Nzk3Mi4xNzUxNTM5MTUz*_ga_8JE65Q40S6*czE3NTQxMzg4MjQkbzUkZzEkdDE3NTQxMzkwNjMkajU1JGwwJGgw',
  },

];
</script>

<template>
  <Carousel :gap="10" :items-to-show="1" :wrap-around="true" :autoplay="3000" :pause-autoplay-on-hover="true"
    :breakpoints="{
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      1000: {
        itemsToShow: 2,
        snapAlign: 'start',
      }
    }">
    <Slide v-for="slide in carousel" :key="slide">
      <div class="carousel__item">
        <img :src="slide.image" class="w-full h-full object-cover rounded-lg" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<style>
.carousel__next,
.carousel__prev {
  background: #FFF;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  color: #222;
  margin: 0 15px;
}

.carousel__next:hover,
.carousel__prev:hover {
  color: #000;
  background: #F0F0F0;
}

.carousel__next--disabled,
.carousel__prev--disabled {
  opacity: 0.3;
}

.carousel__pagination-button {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin: 0 2px;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  vertical-align: middle;

}

.carousel__pagination-button--active {
  background-color: #000;
}
</style>
