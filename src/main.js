// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'


import axios from 'axios'
import Bscroll from 'better-scroll'

import fastClick from 'fastclick'//消除移动端物理接触到事件触发的300ms延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'// 轮播插件
import 'babel-polyfill' // 解决低版本浏览器出现的一些白屏，ie9和一些低版本的高级浏览器对es6新语法并不支持
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.prototype.$ajax = axios
Vue.use(VueAwesomeSwiper)
Vue.prototype.$scroll = Bscroll
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
