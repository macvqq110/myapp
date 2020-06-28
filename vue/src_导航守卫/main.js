// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common.css'
import './assets/routerTransition.css'
import { format } from 'url';
Vue.config.productionTip = false
/* eslint-disable no-new */
// router.beforeEach((to,from,next)=>{
//     if(to.path=='/show'&&from.path=="/list"){
//           from.meta.type=true
//     }else if(to.path=='/book'&&from.path=="/list"){
//           from.meta.type=false

//     }
//     next() 
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
