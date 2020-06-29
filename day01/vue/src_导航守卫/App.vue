<template>
  <div id="app">
    <transition :name="donghua" v-if="isT">
      <keep-alive>
        <router-view @isTr="isTFn" v-if="$route.meta.type"></router-view>
      </keep-alive>
    </transition>
    <transition :name="donghua">
      <router-view v-if="!$route.meta.type"></router-view>
    </transition>
    <footer>
      <p v-for="(value) in nav" :key="value.id" @click="jump(value.src)">{{value.name}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    "$route.meta.index"(to, form) {
      this.isT = true
      if (to > form) {
        this.donghua = "router";
      } else if (to < form) {
        this.donghua = "router1";
      }
    }
  },

  data() {
    return {
      donghua: "router",
      isT:true,
      nav: [
        { name: "首页", id: 0, src: "/list" },
        { name: "视频", id: 1, src: "/show" },
        { name: "小说", id: 2, src: "/book" },
        { name: "歌曲", id: 3, src: "/music" }
      ]
    };
  },
  methods: {
    jump(src) {
      this.$router.push({
        path: src
      });
    },
    isTFn(bool) {
      console.log(bool)
      this.isT = bool
    }
  }
};
</script>

<style>
#app {
  height: 100%;
  position: relative;
}
.show,
.list,
.book,
.music {
  position: absolute;
  height: 95%;
}
.router {
  flex: 1;
}
footer {
  background: skyblue;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5%;
  display: flex;
  justify-content: space-around;
  font-size: 0.5rem;
  align-items: center;
}
footer p {
  height: 100%;
  line-height: 300%;
}
</style>
