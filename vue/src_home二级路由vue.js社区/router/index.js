import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Child from '@/components/Child'

// 解决重复触发一个路由路径时报错的问题
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home",
      name: '',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'child',
          name: 'Child',
          component:Child
        },
      ]
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
