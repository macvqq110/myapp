// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局前置守卫
router.beforeEach((to,from,next)=>{
  // console.log('beforeEach')
  // console.log(to,from,next)
  if(to.name=="Hebei" && from.name == "Beijing") {
    // 表示不可以通行
    // next(false)
    next()
  } else {
    // 表示通行
    next()
  }
  
})

// 路由全局解析守卫
router.beforeResolve((to,from,next)=>{
  // to 表示即将进入的路由组件（to为路由信息对象）
  // from 表示从哪个路由组件来的（from为路由信息对象）
  // next 为路由守卫的 执行下一步函数（通行证，是否可以继续）
  next()
  // console.log("beforeResolve")
})

// 全局后置钩子
router.afterEach((to,from,next)=>{
  // console.log("afterEach")
  // console.log(next)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App:App },
  template: '<App/>'
})
