<template>
  <div id="app" class="app">
    <router-view></router-view>
    <div class="box">
        <!-- <router-link tag="button" to="/">首页</router-link>
        <router-link tag="button" to="/shop/苹果999">shop</router-link>
        <hr>
        <button @click="jump('/')">编程式跳转-首页</button>
        <button @click="jump('/shop')">编程式跳转-shop</button> -->
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
    jump(path) {
      this.$router.push({
        path,   // 跳转的路径
        query:{ // 对应的传参对象
          obj:{
            name:"橘子",
            price:10
          }
        }
      })
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
.box{
  display: flex;
  justify-content: center;
  margin-top:500px;
}
</style>
