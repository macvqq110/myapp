<template>
    <div class="box">
        <h4>list组件</h4>
        <button @click="jump">跳转到shop路由页面</button>

        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
         <button @click="show = !show">
            Toggle
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        };
    },
    created() {

    },
    mounted() {

    },
    beforeRouteEnter(to,from,next) {
        console.log("beforeRouteEnter")
        next()
    },
    methods: {
        jump() {
            this.$router.push("/shop")
        }
    }
};
</script>

<style scoped>
    .box{
        background-color: pink;
        height:100%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
