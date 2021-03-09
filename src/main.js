import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueSocketIO from 'vue-socket.io'
import store from './store'
import io from 'socket.io-client'
import * as echarts from 'echarts'

import './main.css'
import './plugins/element.js'
import App from './App.vue'
import routes from './routes'

// const debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({ 
  mode: 'history',
  base: __dirname,
  // scrollBehavior,
  routes
});

function initSocket() {
  // const _this = this;
  const socket = io('http://localhost:4000/',{
    autoConnect: false
  })
  // this.socket = socket;
  // console.log(‘初始化：socket’, socket);
  // socket.on('connect', (data) => {
  //   console.log('open:', data);
  //   socket.emit('addUser', 'userName');
  // });
  // socket.on('order_event', (data) => {
  //   console.log('Received order event', data);
  // });
  return socket
}
// const VueSocketIO
Vue.prototype.$socket=initSocket();

Vue.prototype.$echarts = echarts;

import { currency } from './filter//currency'

Vue.filter('currency', currency)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
