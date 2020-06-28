<template>
  <div id="app" class="app">
      <!-- <Vow></Vow> -->
      {{ num }}
      <button @click="add">++</button>
      <div v-if="isShow">显示的内容</div>
      <button @click="isShow = !isShow">isShow</button>
      <button @click="destroyFn">销毁vue实例</button>
      <hr>
      <div :style="{opacity: opacity}">hello 生命周期</div>
      <hr>
      <app-key></app-key>
  </div>
</template>

<script>
import appKey from './components/Key'
import Vow from '@/components/Vow'
export default {
  name: 'App',
  data() {
    return {
        num:1000,
        isShow:true,
        opacity:1,
        id:""
    }
  },
  // 创建前
  beforeCreate() {
    // console.log(this.num)
    // console.log(this.add)
    // this.isShow = true
    console.log("【beforeCreate。。。。。","函数被调用】")
  },
  // 创建后
  created() {
    // console.log(this.num)
    // console.log(this.add)
    // console.log(this.isShow)
    console.log("【created。。。。。","函数被调用】")
  },
  // 挂载前
  beforeMount() {
    console.log("【beforeMount。。。。。","函数被调用】")
    // this.id = setInterval(()=>{
    //   console.log(this.opacity)
    //     this.opacity -=0.1
    //     if(this.opacity < 0) {
    //       this.opacity = 1
    //     }
    // },300)
  },
  // 挂载后
  mounted() {
    console.log("【mounted。。。。。","函数被调用】")
  },
  // 更新前
  beforeUpdate() {
    // console.log("【beforeUpdate。。。。。","函数被调用】")
  },
  // 更新后
  updated() {
    // console.log("【updated。。。。。","函数被调用】")
  },
  // 销毁前
  beforeDestroy() {
    console.log("【beforeDestroy。。。。。","函数被调用】")
    // clearInterval(this.id)
  },
  // 销毁后
  destroyed() {
    console.log("【destroyed。。。。。","函数被调用】")
    clearInterval(this.id)
    console.log(this.id)
  },
  methods:{
    add() {
      this.num ++
    },
    destroyFn() {
      this.$destroy()
    }
  },
  components:{
    Vow,appKey
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

}
.header{
  background: pink;
}
.footer{
  background: green;
}

</style>
