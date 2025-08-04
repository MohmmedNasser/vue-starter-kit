<template>
  <div>
    <h1 class="flex justify-center items-center my-5 text-4xl">Fetch user from Axios</h1>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getUsers } from '@/services/userService';
import { onMounted, ref } from 'vue';

interface User {
  id: number,
  name: string
}

const users = ref<User[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await getUsers()
    users.value = data
  } catch (error) {
    console.error('Error loading users:', error)
  } finally {
    loading.value = false
  }
});

</script>

<style scoped></style>
