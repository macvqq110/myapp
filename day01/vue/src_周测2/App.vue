<template>
  <div id="app" class="app">
      <Shop></Shop>
  </div>
</template>

<script>

import Shop from './components/Shop'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods:{
  
  },
  components:{
    Shop
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
