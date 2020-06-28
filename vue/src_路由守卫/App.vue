<template>
  <div id="app" class="app">
    <!-- <h4>app</h4> -->
    <transition name="left">
      <router-view class="router"></router-view>
    </transition>
    
  </div>
</template>

<script>

import './assets/animation.css'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods:{
  
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
</style>
