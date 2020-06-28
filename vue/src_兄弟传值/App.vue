<template>
  <div id="app" class="app">
    <app-header :obj="obj"/>
    <app-main :tabIndex="tabIndex"></app-main>
    <app-footer @foot="footFn" :footer="FootArr"></app-footer>
  </div>
</template>

<script>
import appHeader from '@/components/Header'
import appMain from './components/Main'
import appFooter from '@/components/Footer'

export default {
  name: 'App',
  data() {
    return {
      num:100,
      // 头部的需要数据
      obj:{
        title:"首页",
        left:"左侧返回键",
        right:"右侧返回键"
      },
      tabIndex:1,
      FootArr:["首页","视频","任务","小说","我的"]

    }
  },
  methods:{
    footFn(index) {
      // console.log("回调函数触发")
      console.log(index)
      this.tabIndex = index.index
    }
  },
  components:{
    appHeader,appMain,appFooter
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
