<template>
  <div class="Echarts">
    <div id="main" style="width: 600px; height: 400px"></div>
    <div id="pie" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "Report",
  methods: {
    renderEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "销量统计",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    renderPie() {
      var myChart = this.$echarts.init(document.getElementById("pie"));
      myChart.setOption({
        title: {
          text: "来源统计",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" },
            ],
          },
        ],
      });
    },
  },
  mounted() {
    this.renderEcharts();
    this.renderPie();
  },
};
</script>

<style>
</style>