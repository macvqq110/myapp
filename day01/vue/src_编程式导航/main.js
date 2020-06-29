// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局自定义指令跳转
Vue.directive("jump",(el,binding,vnode) => {
  el.onclick = function() {
      console.log(binding.value)
      vnode.context.$router.push({
          path:binding.value.path,
          query:{
              item:binding.value.item
          }
      })
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App:App },
  template: '<App/>'
})
