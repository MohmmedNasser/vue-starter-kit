<template>
  <div class="text-center">
    <h1 class="text-2xl  font-semibold my-5">
      This page use Vue Toastification with composable useNotifier
    </h1>
    <p>
      When this page is loaded, a toast notification will appear at the bottom left of the screen.
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useNotifier } from '@/composables/useNotifier'

const notify = useNotifier()

onMounted(() => {
  notify.success('Welcome to Vue Toastification!');
});

</script>

<style scoped></style>
