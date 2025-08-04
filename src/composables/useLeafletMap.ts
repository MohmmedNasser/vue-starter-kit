import { ref } from 'vue'
import type { LatLngExpression } from 'leaflet'

export interface MarkerData {
  id: number
  position: LatLngExpression
  popupText: string
}

// ✅ اجعل refs خارج الدالة لكي لا يتم إعادة إنشائها في كل استدعاء
const center = ref<LatLngExpression>([31.9522, 35.2332])
const zoom = ref<number>(13)
const markers = ref<MarkerData[]>([]);
let markerId = 1

export function useLeafletMap() {
  function setCenter(newCenter: LatLngExpression) {
    center.value = newCenter
  }

  function setZoom(newZoom: number) {
    zoom.value = newZoom
  }

  function setMarkers(newMarkers: MarkerData[]) {
    markers.value = newMarkers
  }

  function addMarker(marker: Omit<MarkerData, 'id'>) {
    markers.value.push({ id: markerId++, ...marker })
  }

  function removeMarker(id: number) {
    markers.value = markers.value.filter(m => m.id !== id)
  }

  return {
    center,
    zoom,
    markers,
    setCenter,
    setZoom,
    setMarkers,
    addMarker,
    removeMarker
  }
}
