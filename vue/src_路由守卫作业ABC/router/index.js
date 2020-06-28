import Vue from 'vue'
import Router from 'vue-router'

import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/a"
    },
    {
      path: '/a',
      name: 'A',
      component: A,
      meta:{
        keep:true
      }
    },
    {
      path: '/b',
      name: 'B',
      component: B,
      meta:{
        keep:false
      }
    },
    {
      path: '/c',
      name: 'C',
      component: C,
      meta:{
        keep:false
      }
    }
  ]
})
