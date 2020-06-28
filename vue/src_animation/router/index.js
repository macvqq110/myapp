import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        index:0
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta:{
        index:1
      }
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta:{
        index:2
      }
    }
  ]
})
