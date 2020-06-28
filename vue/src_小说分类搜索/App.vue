<template>
  <div id="app" class="app">
    <router-view></router-view>
    <ul class="ul">
      <li :style="{background:footIndex == index?'blue':''}" @click="jump(index,item.path)" v-for="(item,index) in footer" :key="index">
        <p>
          <i :class="item.icon"></i>
        </p>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      footIndex:0,
      footer:[
        {
          name:"书架",
          icon:"el-icon-reading",
          path:"/"
        },
        {
          name:"分类",
          icon:"el-icon-menu",
          path:"/cate"
        },
        {
          name:"排行",
          icon:"el-icon-s-data",
          path:"/top"
        },
        {
          name:"搜索",
          icon:"el-icon-search",
          path:"/search"
        }
      ]
    }
  },
  methods:{ 
    jump(index,path) {
      this.footIndex = index
      this.$router.push(path)
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
  min-height: 100%;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#app>div{
  height:100%;
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
.ul{
  list-style: none;
  display: flex;
  text-align: center;
  margin:0;
  padding:0;
}
.ul>li{
  flex:1;
  background: #ddd;
  /* height:45px;
  line-height: 45px; */
  color:#000;
}
.ul>li>p{
  margin:0;
}
.header{
  height: 50px;
  line-height: 50px;
  background: blue;
  width:100%;
  text-align: center;
}
</style>
