import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {resize} from './extends/resizeFont.js'
import './assets/css/style.css'

//移动端事件
import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

import loading from './assets/images/loading.gif'  //加载图片
import error from './assets/images/error.gif'   //加载图片出错
import VueLazyload from 'vue-lazyload'  //图片懒加载

Vue.use(VueLazyload, {
  error,
  loading,
})

//vant轻提示
import { Toast,Button } from 'vant';
import 'vant/lib/index.css';
Vue.use(Button);


Vue.config.productionTip = false

// require('events').EventEmitter.defaultMaxListeners = 0  内存？
// const EventEmitter = require('events');
// const emitter = new EventEmitter()
// emitter.setMaxListeners(50)

new Vue({
  router,
  store,
  beforeCreate() {
    resize()
  },
  render: h => h(App)

}).$mount('#app')
