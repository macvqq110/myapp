<template>
  <div id="app" class="app">
    <!-- <Keep></Keep> -->
    <!-- 占位符 -->
    <router-view></router-view>
    <div style="color:red;margin-top:50px;">
        
        <router-link to="/" tag="button">显示helloword</router-link>
        <router-link to="/keep" tag="button">显示keep</router-link>
        <!-- <button>显示keep</button> -->
    </div>
  </div>
</template>

<script>

import Keep from './components/Keep'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods:{
  
  },
  components:{
   Keep
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

</style>
