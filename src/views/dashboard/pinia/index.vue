<template>
  <div class="p-5 border border-gray-200 rounded-2xl mx-auto mb-8 text-center">
    <p class="mb-2 text-lg font-medium">
      {{ count }}
    </p>
    <CustonButton @click="increment">Increment</CustonButton>
    <p class="text-sm my-2">
      this counter coming from <strong>Counter Store</strong> and persist in LocalStorage by <span
        class="text-indigo-800">(piniaPluginPersistedstate)</span>
    </p>
  </div>
</template>

<script setup lang="ts">

import CustonButton from '@/components/custom/Button.vue';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const useCount = useCounterStore();

const { count } = storeToRefs(useCounterStore());
const { increment } = useCount;
</script>

<style scoped></style>
