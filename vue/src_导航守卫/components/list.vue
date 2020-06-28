<template>
  <div class="list">
    <h2>首页</h2>
    <input type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  created() {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.path == "/list" && from.path == "/book") {
         to.meta.type = false;
        vm.$emit("isTr",false)
      } else {
        to.meta.type = true;
        vm.$emit("isTr",true)
      }
    });
  },
  mounted() {},
  methods: {
    to() {
      this.$router.push({
        path: "/show"
      });
    }
  }
};
</script>

<style scoped>
.list {
  height: 95%;
  width: 100%;
  background: gold;
  text-align: center;
}
.active {
  transition: all 0s !important;
}
</style>
