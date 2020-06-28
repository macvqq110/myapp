import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Look from '@/components/Look'
import Child from '@/components/Child'
import Child_tuijian from '@/components/Child_tuijian'
import Child_hot from '@/components/Child_hot'

Vue.use(Router)

// 解决重复路由点击时的报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 路由信息映射表
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/look',
      name: 'Look',
      component: Look,
      children:[
        {
          path: 'child',
          name: 'Child',
          meta:{
            a:1,
            b:2
          },
          component: Child
        },
        {
          path: 'child_tuijian',
          name: 'Child_tuijian',
          component: Child_tuijian
        },
        {
          path: 'child_hot',
          name: 'Child_hot',
          component: Child_hot
        },
      ]
    }
  ]
})
