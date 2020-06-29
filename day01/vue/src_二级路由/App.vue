<template>
  <div id="app" class="app">
    <div class="main">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepalive"></router-view>
      
    </div>
    <!-- 尾部 -->
    <ul class="footerUl">
        <router-link 
          :to="item.to"
          tag="li"
          :style="{
            background:activeIndex == index?'#ddd':''
          }"
          v-for="(item,index) in footerArr"
          :key="index"
          >
          <div class="text" @click="toogle(index)">
              {{ item.name }}
          </div>
        </router-link>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      footerArr:[
        {
          name:"百度",
          to:"/"
        },
        {
          name:"好看视频",
          to:"/goodLook"
        },
        {
          name:"小说",
          to:"/book"
        },
        {
          name:"去签到",
          to:"/"
        },
        {
          name:"我的",
          to:"/"
        }
      ],
      activeIndex:0,
      arr:[1,2,3,456]
    }
  },
  computed:{
    // sum () {
    //   let sum = 0
    //   this.arr.forEach((item)=>{
    //     sum+=item
    //   })
    //   return sum 
    // },
    sum:{
      get() {
        let sum = 0
        this.arr.forEach((item)=>{
          sum+=item
        })
        return sum 
      },
      set(val) {
        // 相当于监听
        console.log(val)
      }
    }
  },
  // 创建后
  created() {
    // 获取本地存储的下标
    let index = window.localStorage.getItem("FooterIndex")
    if(index){
      // 同步
      this.activeIndex = index
    }
  },
  mounted() {

  },
  watch:{
      activeIndex(val) {
        window.localStorage.setItem("FooterIndex",val)
      },
      // 监听路由对象
      $route(to,from) {
        // console.log(to,from)
        // console.log(to.meta.index)
        this.activeIndex = to.meta.index
      }
  },
  methods:{
    // 点击切换
    toogle(index) {
      this.activeIndex = index
      // window.localStorage.setItem("FooterIndex",index)
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
  background: pink;
}
.header{
  background: pink;
}
.footer{
  background: green;
}
.footerUl{
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin:0;
  padding:0;
  text-align: center;
  background: chartreuse;
}
.footerUl>li{
  flex: 1;
  height:45px;
  line-height: 45px;
}
.text{
  width:100%;
  height:100%;
}
</style>
