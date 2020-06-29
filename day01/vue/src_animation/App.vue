<template>
  <div id="app" class="app">
    <!-- <h4>app</h4> -->
    <transition :name="animation">
      <router-view class="router"></router-view>
    </transition>
    <ul class="ul">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/list">list</router-link>
      </li>
      <li>
        <router-link to="/my">my</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import './assets/left.css'
import './assets/right.css'
export default {
  name: 'App',
  data() {
    return {
      animation:"left"
    }
  },
  methods:{
  
  },
  watch:{
    $route(to,from) {
    console.log(to,from)
    //  从哪个路由过来 他的index 如果大于去的index，那么我就加右动画
     if(from.meta.index > to.meta.index) {
       this.animation = "right"
     } else {
       this.animation = "left"
     }
    }
  },
  components:{
   
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  display: flex;
  flex-direction: column;
}
body,html{
  height:100%;
  margin:0;
}
.main{
  flex:1;
  background: blue;
}
.header{
  background: pink;
}
.footer{
  background: green;
}


.router{
  position: absolute;
  width:100%;
}
.ul{
  z-index: 500;
  list-style: none;
  display: flex;
  padding: 0;
  position: fixed;
  margin:0;
  left:0;
  width:100%;
  bottom:0;
}
.ul>li{
  flex: 1;
  background: #ddd;
  height:45px;
  line-height: 45px;
}
.ul>li>a{
  color:#fff;
}
</style>
