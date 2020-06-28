<template>
  <div id="app" class="app">
    <!-- 一号 -->
    <keep-alive>
      <router-view v-if="$route.meta.keep"></router-view>
    </keep-alive>
    <!-- 二号 -->
    <router-view v-if="!$route.meta.keep"></router-view>
    
    <div class="box">
      <router-link to="/a">跳转到A页面</router-link>
      <router-link to="/b">跳转到B页面</router-link>
      <router-link to="/c">跳转到C页面</router-link>

    </div>
  </div>
</template>

<script>


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
.box{
  margin-top:100px;

}

</style>
