import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import show from '@/components/show'
import music from '@/components/music'
import book from '@/components/book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect:'list'
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      meta:{
        index:0,
        type:true,
      }
    },
    {
      path: '/show',
      name: 'show',
      component: show,
      meta:{
        index:1,
        type:true,
      }
    },
    {
      path: '/book',
      name: 'book',
      component: book,
      meta:{
        index:2,
        type:true,
      }
    },
    {
      path: '/music',
      name: 'music',
      component: music,
      meta:{
        index:3,
        type:true,
      }
    }
  ]
})
