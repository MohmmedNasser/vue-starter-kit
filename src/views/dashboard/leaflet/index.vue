<template>
  <div>
    <h2 class="text-2xl text-center font-semibold my-5">Interactive map with dynamic markers</h2>
    <!-- <div v-for="marker in data" :key="marker.id" class="mb-4 p-2 border rounded">
      <p>{{ marker.popupText }}</p>
    </div> -->
    <DynamicMap />
  </div>
</template>

<script setup lang="ts">
import DynamicMap from '@/components/custom/DynamicMap.vue'
import { useLeafletMap } from '@/composables/useLeafletMap'
import { onMounted, ref } from 'vue'

const { setMarkers } = useLeafletMap()

const data = ref(
  [
    { id: 1, position: [31.9522, 35.2332] as [number, number], popupText: '📍 رام الله' },
    // { id: 2, position: [31.9632, 35.2082] as [number, number], popupText: '📍 البيرة' },
    // { id: 3, position: [31.9454, 35.2272] as [number, number], popupText: '📍 بيتونيا' }
  ]
)
onMounted(() => {
  return setMarkers(data.value)
})

</script>
