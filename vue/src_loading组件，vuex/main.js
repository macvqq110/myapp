// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 使用vuex 仓库
import store from './store'
// 请求拦截器
axios.interceptors.request.use((config)=>{
  // 显示loading
  store.state.isLoading = true
  return config
})

//相应拦截器
axios.interceptors.response.use((response)=>{
  // console.log
  // 隐藏loading
  setTimeout(() => {
    console.log(123456)
    store.state.isLoading = false
    return Promise.resolve(response);
  }, 2000);
})
// 将axios在原型上定义
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App:App },
  template: '<App/>'
})
