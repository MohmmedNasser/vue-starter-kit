<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <DashboardLayout>
    <template #breadcrumb>
      {{ (route.name) }}
    </template>
    <router-view />
  </DashboardLayout>

</template>
