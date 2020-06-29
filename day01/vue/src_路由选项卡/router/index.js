import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Keep from '@/components/Keep'

Vue.use(Router)

// 路由信息映射表
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/keep',
      name: 'keep',
      component: Keep
    }
  ]
})
