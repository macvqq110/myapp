<template>
  <div id="app" class="app">
    <Transfer :arr="leftArr"></Transfer>
    <div>
      <button :disabled="!leftDisable" @click="leftBtn">&lt;</button>
      <button :disabled="rightDisable" @click="rightBtn">&gt;</button>
    </div>
    <Transfer :arr="rightArr"></Transfer>
  </div>
</template>

<script>

import Transfer from "./components/Transfer";
export default {
  name: 'App',
  data() {
    return {
      leftArr:[
        {
          name:"北京",
          checked:false,
          id:1,
          done:true
        },
        {
          name:"上海",
          checked:false,
          id:2,
          done:true
        },
        {
          name:"广州",
          checked:false,
          id:3,
          done:true
        },
        {
          name:"深圳",
          checked:false,
          id:4,
          done:true
        }
      ],
      rightArr:[
        {
          name:"浙江",
          checked:false,
          id:5,
          done:true
        },
        {
          name:"重庆",
          checked:false,
          id:6,
          done:true
        },
        {
          name:"西安",
          checked:false,
          id:7,
          done:true
        },
        {
          name:"郑州",
          checked:false,
          id:8,
          done:true
        }
      ]
    }
  },
  computed:{
    // 左侧按钮禁用状态
    leftDisable() {
        let bool = this.rightArr.some((item)=>{
          return item.checked
        })
        return bool
    },
    rightDisable() {
        return this.leftArr.every((item)=>{
          return !item.checked
        })
    }
  },
  methods:{
    // 左按钮
    leftBtn() {

    },
    // 右按钮
    rightBtn() {
      for(let i = 0;i<this.leftArr.length;i++){
        // 如果为选中状态
        if(this.leftArr[i].checked){
          // 向右去添加数据
          this.rightArr.push(this.leftArr[i])
          // 还原点击状态
          this.leftArr[i].checked = false
          // 删除左侧的i数据
          this.leftArr.splice(i,1)
          i-- 
        }
      }
    },
    // 左按钮
    leftBtn() {
      for(let i = 0;i<this.rightArr.length;i++){
        // 如果为选中状态
        if(this.rightArr[i].checked){
          // 向右去添加数据
          this.leftArr.push(this.rightArr[i])
          // 还原点击状态
          this.rightArr[i].checked = false
          // 删除左侧的i数据
          this.rightArr.splice(i,1)
          i-- 
        }
      }
    }
  },
  components:{
   Transfer 
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
  justify-content: space-around;
  align-items:center;
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
.app{
  display:flex;

}
button{
  width:100px;
  height:50px;
  background:#65B1FF;
  color:#fff;
}
[disabled]{
    background:#A0CFFE;
}
</style>
