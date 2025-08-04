import type { App } from 'vue'
import { use } from 'echarts/core'


// ✅ استدعاء Core
import { CanvasRenderer } from 'echarts/renderers'

// ✅ استدعاء أنواع الرسوم (اختَر ما تحتاجه فقط)
import { BarChart, LineChart, PieChart } from 'echarts/charts'

// ✅ استدعاء مكونات ECharts
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components'

export default function installECharts(app: App) {
  app.config.globalProperties.$echarts = installECharts;
  use([
    CanvasRenderer,
    BarChart,
    LineChart,
    PieChart,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
  ])
}
