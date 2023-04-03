import * as echarts from 'echarts/core'
import { LineChart, LineSeriesOption, BarChart, BarSeriesOption } from 'echarts/charts'
import {
  GridComponent,
  GridComponentOption,
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
  DatasetComponent,
  DatasetComponentOption,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

export type ECOption = echarts.ComposeOption<
  GridComponentOption | TooltipComponentOption | DatasetComponentOption| LegendComponentOption | LineSeriesOption | TitleComponentOption | BarSeriesOption
>

export function setupEcharts() {
  echarts.use([GridComponent, LineChart, CanvasRenderer, DatasetComponent ,BarChart, LegendComponent, TooltipComponent, TitleComponent])
}

export default echarts
