import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GoodLook from '@/components/GoodLook'
import Book from '@/components/Book'
import Tuijian from '@/components/Tuijian'
import Hot from '@/components/Hot'
import Kangyi from '@/components/Kangyi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:"/tuijian",
      meta:{
        index:0,
        keepalive:false
      },
      // 二级路由使用
      children:[
        {
          path:"tuijian",
          name:"Tuijian",
          component: Tuijian
        },
        {
          path:"hot",
          name:"Hot",
          component: Hot
        },
        {
          path:"kangyi",
          name:"Kangyi",
          component: Kangyi
        }
      ]
    },
    {
      path: '/goodLook',
      name: 'GoodLook',
      component: GoodLook,
      meta:{
        index:1,
        keepalive:false
      }
    },
    {
      path: '/book',
      name: 'Book',
      component: Book,
      meta:{
        index:2,
        keepalive:true
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
