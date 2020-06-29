<template>
  <div id="app" class="app">
    <!-- <appHeader size="50px" @back="backFn" @share = "shareFn">
      <div slot="left"></div>
      <div slot="right"></div>
    </appHeader>
    <Child>
      <div slot="div">
        <h3>我是父组件插入到子组件的文字</h3>
        <span @click="al" class="colorRed">{{ message }}</span>
      </div>
      <Count slot="count"></Count>
      <div slot="box" style="width:200px;height:200px;background:blue;"></div>
    </Child> -->








    <app-scope>
      <template slot-scope="arr">
        <!-- {{ arr }} -->
        <div v-for="(item,index) in arr.arr" :key="index" v-if="item.age>=20" style="background:red;">
           <p>name: <button>{{ item.name }}</button></p>
           <p>age:  <button>{{ item.age }}</button></p>
        </div>
      </template>
    </app-scope>
    <hr/>
    <app-scope/>


  </div>
</template>

<script>
import appScope from './components/Scope'
import appHeader from './components/Header'
import Child from './components/Child'
import Count from './components/Count'
export default {
  name: 'App',
  data() {
    return {
      message:"文字内容",

    }
  },
  methods:{
    al() {
      alert("132456")
    },
    backFn() {
      console.log("左按钮回调方法")
    },
    shareFn() {
      console.log("右按钮回调方法")
    }
  },
  components:{
   Child,Count,appHeader,appScope
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
.colorRed{
  color:red;
}
</style>
