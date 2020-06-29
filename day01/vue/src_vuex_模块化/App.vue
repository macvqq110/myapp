<template>
  <div id="app" class="app">
    <h4>app</h4>
    <Child></Child>
  </div>
</template>

<script>

import Child from './components/Child'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  mounted() {
    // this.ajaxTopics()
  },
  methods:{
    // 请求主题数据的方法
    async ajaxTopics() {
      let  { data:res }  = await this.$http.get("api/v1/topics",{
        params:{tab:"share",limit:5}
      })
      // console.log(res.data)
    }
  },
  components:{
   Child
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
