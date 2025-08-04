<template>
  <l-map style="height: 500px; width: 100%" :zoom="zoom" :center="center" :use-global-leaflet="false"
    @click="handleMapClick">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors" />

    <!-- ✅ markers الآن ديناميكية -->
    <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.position" :draggable="true"
      @dragend="handleMarkerDrag(marker, $event)" @contextmenu="handleMarkerRightClick(marker, $event)">
      <l-popup>{{ marker.popupText }}</l-popup>
    </l-marker>
  </l-map>
</template>

<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import { useLeafletMap } from '@/composables/useLeafletMap'
import 'leaflet/dist/leaflet.css'
import { computed } from 'vue'
import type { DragEndEvent, LeafletMouseEvent } from 'leaflet'

// Ensure center is always a [number, number] tuple
const { center: rawCenter, zoom, markers, addMarker, removeMarker } = useLeafletMap()
const center = computed(() => {
  if (Array.isArray(rawCenter.value)) {
    // Ensure it's a 2-element tuple
    return [rawCenter.value[0] ?? 0, rawCenter.value[1] ?? 0] as [number, number]
  }
  // If it's an object with lat/lng, convert to tuple
  if (rawCenter.value && typeof rawCenter.value === 'object' && 'lat' in rawCenter.value && 'lng' in rawCenter.value) {
    return [rawCenter.value.lat, rawCenter.value.lng] as [number, number]
  }
  // Fallback to a default center if invalid
  return [0, 0] as [number, number]
});

function handleMapClick(event: LeafletMouseEvent) {
  const { lat, lng } = event.latlng
  addMarker({
    position: [lat, lng],
    popupText: `📍 New Marker : ${lat.toFixed(4)}, ${lng.toFixed(4)}`
  })
}

function handleMarkerRightClick(marker: any, event: LeafletMouseEvent) {
  const { lat, lng } = event.latlng
  console.log('🚀 Marker position :', lat, lng)

  // ✅ حذف الـ Marker من الـ composable
  removeMarker(marker.id)

  // ✅ (مثال) إرسال lat/lng إلى API:
  // await fetch('/api/delete-marker', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ id: marker.id, lat, lng })
  // })
}

function handleMarkerDrag(marker: any, event: DragEndEvent) {
  const newLatLng = event.target.getLatLng()
  console.log('📍 Move marker:', newLatLng.lat, newLatLng.lng)

  // ✅ تحديث موقع الـ marker في array
  marker.position = [newLatLng.lat, newLatLng.lng]

  // ✅ (مثال) إرسال الموقع الجديد إلى API
  // await fetch('/api/update-marker', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ id: marker.id, lat: newLatLng.lat, lng: newLatLng.lng })
  // })
}

</script>
