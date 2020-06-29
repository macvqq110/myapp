<template>
    <div>
        <h4>北京路由页面</h4>

        <button @click="jump">我想出北京，到河北</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    // 组件确认钩子
    beforeRouteEnter(to,from,next){
        next()
    },
    beforeRouteLeave(to,from,next) {
        next()
    },
    methods: {
        jump() {
            this.$router.push({
                path:"/hebei"
            })
        }
    }
};
</script>

<style scoped>
    div{
        background: yellow;
         height: 100%;
    }
</style>
