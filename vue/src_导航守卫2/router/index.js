import Vue from 'vue'
import Router from 'vue-router'
import Beijing from '@/components/Beijing'
import Hebei from '@/components/Hebei'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Beijing',
      component: Beijing,
      beforeEnter(to,from,next) {
        // if(to.name == "Beijing" && from.name == "Hebei"){
        //   next()
        // } else {
        //   next()
        // }
        next()
      }
    },
    {
      path: '/hebei',
      name: 'Hebei',
      component: Hebei
    }
  ]
})
