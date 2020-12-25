<template>
  <div id="myChart"
       ref="myChart"
       style="width: 500px;height: 300px;border: 1px solid black;"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'echarts',
  props: {
    //echarts的options
    options: {
      type: Object,
      default: function () {
        return {
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    }
  },
  // computed: {

  // },
  data () {
    return {}
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      //基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.myChart);

      //绘制图表
      myChart.setOption(this.options)
    }
  }
}
</script>

<style>
</style>