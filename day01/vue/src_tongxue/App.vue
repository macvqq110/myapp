<template>
  <div id="app">
    <transition name="left">
        <router-view class="router"/>
    </transition>
    
    <ul class="ul">
      <li> <router-link to="/">home</router-link> </li>
      <li> <router-link to="/list">list</router-link> </li>
      <li> <router-link to="/my">my</router-
      link> </li>
    </ul>
  </div>
</template>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
}
html,body{
  height: 100%;
}
#app {
  // width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ul{
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  position:fixed;
  left:0;
  bottom:0;
  list-style: none;
  z-index: 100;
  >li{
    height: 30px;
    >a{
      color:#fff;
    }
  }
}
.left-enter{
  transform: translateX(100%) scale(.4) ;
}
.left-enter-to{
  transform: translateX(0) scale(1);
}
.left-enter-active{
  transition: all 1s;
}
.left-leave{
  transform: translateX(0) scale(1);
}
.left-leave-to{
  transform: translateX(-100%) scale(.4) ;
}
.left-leave-active{
  transition: all 1s;
}
  /* 出场动画 */
 
/* 入场初始状态 */
  // .left-enter{
  //   transform: translateX(100%) scale(.4);
  // }
  // .left-enter-to{
  //   transform: translateX(0)  scale(1);
  // }
  // .left-enter-active{
  //   transition: all 1s;
  // }
  //  .left-leave{
  //     transform: translateX(0) scale(1);
  // }
  // .left-leave-to{
  //   transform: translateX(-100%)  scale(.4);
  // }
  // .left-leave-active{
  //   transition: all 1s;
  // }
.router{
  position: absolute;
  width:100%;
}
</style>
