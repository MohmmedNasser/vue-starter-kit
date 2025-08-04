<template>
  <div class="space-y-5">
    <div class="flex flex-wrap p-5 border rounded-md gap-5">
      <customButton intent="primary" :leftIcon="MousePointerClick">
        Primary Button
      </customButton>

      <customButton intent="secondary" :leftIcon="MousePointerClick">
        Secondary Button
      </customButton>

      <customButton intent="danger" :leftIcon="MousePointerClick">
        Danger Button
      </customButton>

      <customButton intent="text" :leftIcon="MousePointerClick">
        Text Button
      </customButton>
    </div>

    <div class="flex flex-wrap p-5 border rounded-md gap-5">
      <customButton intent="primary" disabled :leftIcon="MousePointerClick">
        Primary Button
      </customButton>

      <customButton intent="secondary" disabled :leftIcon="MousePointerClick">
        Secondary Button
      </customButton>

      <customButton intent="danger" disabled :leftIcon="MousePointerClick">
        Danger Button
      </customButton>

      <customButton intent="text" disabled :leftIcon="MousePointerClick">
        Text Button
      </customButton>

    </div>

    <div class="flex flex-wrap p-5 border rounded-md gap-5">
      <customButton intent="primary" :rightIcon="MousePointerClick">
        Primary Button
      </customButton>

      <customButton intent="secondary" :rightIcon="MousePointerClick">
        Secondary Button
      </customButton>

      <customButton intent="danger" :rightIcon="MousePointerClick">
        Danger Button
      </customButton>

      <customButton intent="text" :rightIcon="MousePointerClick">
        Text Button
      </customButton>
    </div>

    <div class="flex flex-wrap p-5 border rounded-md gap-5">
      <customButton intent="primary" loading :rightIcon="MousePointerClick">
        Primary Button
      </customButton>
      <customButton intent="secondary" loading :rightIcon="MousePointerClick">
        Secondary Button
      </customButton>

      <customButton intent="danger" loading :rightIcon="MousePointerClick">
        Danger Button
      </customButton>

      <customButton intent="text" loading :rightIcon="MousePointerClick">
        Text Button
      </customButton>
    </div>

    <div class="flex flex-wrap p-5 border rounded-md gap-5">
      <customButton intent="primary" :as="'a'" href="https://example.com" target="_blank">
        Primary Link
      </customButton>
      <customButton intent="secondary" :as="'a'" href="https://example.com" target="_blank">
        Secondary Link
      </customButton>

      <customButton intent="danger" :as="'a'" href="https://example.com" target="_blank">
        Danger Link
      </customButton>

      <customButton intent="text" :as="'a'" href="https://example.com" target="_blank">
        Text Link
      </customButton>
    </div>


  </div>
</template>

<script setup lang="ts">
import customButton from '@/components/custom/Button.vue';
import { MousePointerClick } from 'lucide-vue-next';
</script>

<style scoped></style>
