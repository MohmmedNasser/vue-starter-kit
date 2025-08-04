<template>
  <div class="text-center">
    <h1 class="text-2xl  font-semibold my-5">
      This page use the Unhead/vue with composable useSeo
    </h1>
    <p>
      check the title and meta description
    </p>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo';

useSeo({
  title: 'unHead Page',
  description: 'this is a page using unHead for SEO management',
})

</script>

<style scoped></style>
