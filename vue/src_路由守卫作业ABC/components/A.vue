<template>
    <div>
        <h4>A组件</h4>
        <input type="text">
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
    methods: {

    },
    // 组件确认的路由守卫
    beforeRouteEnter(to,from,next) {
        next()
        // 如果从C回来
        if(from.name == "C") {
            // 刷新方法
            window.location.reload()
        }
    },
    // 路由守卫，组件离开
    beforeRouteLeave(to,from,next) {
        console.log(to,from)
        if(from.name == "A" && to.name == "B"){
            from.meta.keep = true
        } else if(from.name == "A" && to.name == "C") {
            from.meta.keep = false
        }
        next()
    }
};
</script>

<style scoped>

</style>
