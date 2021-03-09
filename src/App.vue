<template>
<el-container >
    <Nav />
  <el-container direction="vertical">
    <Header />
    <router-view class="view"></router-view>
  </el-container>
</el-container>
</template>

<script>
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
export default {
  name: 'app',
  components:{
    Nav,Header
  },
  sockets: {// 通过vue实例对象sockets实现组件中的事件监听
      connect: function () {// socket的connect事件
        console.log('socket connected from Page')
      },
      STREAM_STATUS(data) {// 后端按主题名推送的消息数据
          console.log('Page：' + data)
      }
    },
    mounted() {
      console.log('page mounted')
      this.$socket.emit('STREAM_STATUS', { subscribe: true })// 在页面加载时发起订阅，“STREAM_STATUS”是你跟后端约定好的主题名
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-container{
  height:100%;
}

.view{
  overflow-y: scroll;
  height: 100%;
}
</style>
