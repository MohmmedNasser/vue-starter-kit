<template>
  <v-chart class="chart" :option="mergedOption" autoresize />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import type { ECOption } from '@/types/echarts'

type ChartType = 'bar' | 'line' | 'pie'

const props = defineProps<{
  type: ChartType
  categories?: string[]
  data: number[] | { name: string; value: number }[]
  title?: string
  colors?: string[]                      // 🎨 ألوان مخصصة
  customOptions?: Partial<ECOption>      // ⚙️ إعدادات إضافية
}>()

/**
 * ✅ إعداد الرسم الأساسي حسب نوع الرسم
 */
const baseOption = computed<ECOption>(() => {
  if (props.type === 'bar') {
    return {
      title: { text: props.title ?? 'Bar Chart' },
      tooltip: {},
      xAxis: { data: props.categories },
      yAxis: {},
      series: [{ type: 'bar', data: props.data as number[] }]
    }
  }

  if (props.type === 'line') {
    return {
      title: { text: props.title ?? 'Line Chart' },
      tooltip: {},
      xAxis: { data: props.categories },
      yAxis: {},
      series: [{ type: 'line', data: props.data as number[], smooth: true }]
    }
  }

  if (props.type === 'pie') {
    return {
      title: { text: props.title ?? 'Pie Chart', left: 'center' },
      tooltip: { trigger: 'item' },
      legend: { bottom: '0%' },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: props.data as { name: string; value: number }[],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

  return {}
})

/**
 * ✅ دمج الألوان و الإعدادات المخصصة
 */
const mergedOption = computed<ECOption>(() => {
  return {
    ...baseOption.value,
    color: props.colors ?? baseOption.value.color,
    ...props.customOptions    // ⚙️ أي خيارات إضافية تأتي من الخارج
  }
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
