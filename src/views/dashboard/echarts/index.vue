<template>
  <div class="grid gap-6">
    <!-- Bar Chart بألوان مخصصة -->
    <Chart type="bar" title="Sales" :categories="['Shirts', 'Cardigans', 'Chiffons']" :data="[5, 20, 36]"
      :colors="['#ff6384', '#36a2eb', '#cc65fe']" />

    <!-- Line Chart مع إعدادات إضافية -->
    <Chart type="line" title="Revenue" :categories="['Jan', 'Feb', 'Mar']" :data="[15, 100, 45]" :customOptions="{
      smooth: false,
      grid: { left: '10%', right: '10%', bottom: '15%' }
    }" :colors="['#ff6384']" />

    <!-- Pie Chart مع ألوان وإضافة Tooltip Formatter -->
    <Chart type="pie" title="Market Share" :data="pieData"
      :colors="['#4bc0c0', '#ffcd56', '#ff9f40', '#36a2eb', '#f7a4eb']" :customOptions="{
        tooltip: { formatter: '{b}: {c} ({d}%)' }
      }" />
  </div>
</template>

<script setup lang="ts">
import Chart from '@/components/custom/BaseChart.vue'

const pieData = [
  { name: 'Direct', value: 1048 },
  { name: 'Email', value: 735 },
  { name: 'Affiliate', value: 580 },
  { name: 'Video', value: 484 },
  { name: 'Search', value: 300 }
]
</script>
