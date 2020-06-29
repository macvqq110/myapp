<template>
  <div id="app" class="app">
    <!-- <h4>app</h4>
    {{ num }}

    <hr>
    <child></child> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Child from './components/child'

export default {
  name: 'App',
  data() {
    return {
      add:""
    }
  },
  // 推荐使用
  computed:{
    num() {
      return this.$store.state.num  
    }
  },
  mounted() {
    // console.log(this.$store.state.num)
    // this.add = this.$store.state.num
  },
  methods:{
    
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
