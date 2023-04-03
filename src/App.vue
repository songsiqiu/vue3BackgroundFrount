<script setup lang="ts">
import { onMounted, ref } from 'vue'
import echarts, { ECOption } from './components/echarts'
import VScaleScreen from 'v-scale-screen'
const showLine1 = ref<HTMLDivElement>()
const showLine2 = ref<HTMLDivElement>()

onMounted(() => {
  if (showLine1.value) {
    const myChart = echarts.init(showLine1.value)
    const myChart2 = echarts.init(showLine2.value)
    const option: ECOption = {
      title: {
        text: '矿山起爆器统计',
      },
      yAxis: {
        type: 'category',
        data: ['a矿山', 'b矿山', 'c矿山', 'd矿山', 'e矿山', 'f矿山', 'g矿山'],
      },
      xAxis: {
        type: 'value',
      },
      legend: {
        data: ['起爆雷管数', '起爆工程数', '起爆器成功数'],
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'bar',
          name: '起爆雷管数',
        },
        {
          data: [2, 3, 4, 2, 23, 1, 4],
          type: 'bar',
          name: '起爆工程数',
        },
        {
          data: [150, 220, 224, 208, 135, 147, 260],
          type: 'bar',
          name: '起爆器成功数',
        },
      ],
    }
    const option2: ECOption = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      dataset: {
        source: [
          ['工厂', 'a雷管厂', 'b雷管厂', 'c雷管厂', 'd雷管厂'],
          ['爆破公司1', 41, 30, 65, 53],
          ['爆破公司2', 86, 92, 85, 83],
          ['爆破公司3', 24, 67, 79, 86],
        ],
      },
      xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 },
      ],
      yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
      grid: [{ bottom: '55%' }, { top: '55%' }],
      series: [
        // These series are in the first grid.
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        // These series are in the second grid.
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      ],
    }
    myChart.setOption(option)
    myChart2.setOption(option2)
  }
})
</script>

<template>
  <VScaleScreen :boxStyle="{ 'background-color': 'white' }">
    <div class="box">
      <div class="title">
        <h1>Dashbored</h1>
      </div>
      <div class="content">
        <div ref="showLine1" class="show-line1"></div>
        <div ref="showLine2" class="show-line1"></div>
      </div>
    </div>
  </VScaleScreen>
</template>

<style scoped>
.box {
  overflow-x: hidden;
  height: 100%;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-line1 {
  width: 600px;
  height: 600px;
  display: inline-block;
}
.title {
  text-align: center;
  margin: 60px 0;
}
</style>
