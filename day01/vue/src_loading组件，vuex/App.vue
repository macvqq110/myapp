<template>
  <div id="app" class="app">
    <!-- <h4>app</h4>
    {{ num }}

    <hr>
    <child></child> -->
    <router-view></router-view>
    <Loading v-if="$store.state.isLoading"></Loading>
  </div>
</template>

<script>

import Loading from './components/Loading'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  // 推荐使用
  computed:{
    num() {
      return this.$store.state.num  
    }
  },
  mounted() {
    // console.log(this)
    // console.log(this.$store.state.num)
    // this.add = this.$store.state.num
    // console.log(1)
    this.$http.get("https://www.vue-js.com/api/v1/topics").then((res)=>{
      // console.log(2)
      console.log(res)
    })
  },
  methods:{
    
  },
  components:{
    Loading
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
