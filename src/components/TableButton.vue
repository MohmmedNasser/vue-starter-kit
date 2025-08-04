<template>
  <a :href="`/user/${id}/edit`" class="text-indigo-600 hover:text-indigo-900">
    Edit
  </a>
</template>

<script setup lang="ts">

const props = defineProps<{
  id: string;
}>();

</script>

<style scoped></style>
