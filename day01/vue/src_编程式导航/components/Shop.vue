<template>
    <div>
        <h3>shop</h3>
        shop12313615616165165
        <!-- <p>名称：{{ obj.name }}</p>
        <p>价格：{{ obj.price }}</p> -->
        <div v-jump="{path:'/'}">跳转到home组件</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            obj:{}
        };
    },
    created() {
        console.log(this.$route)
        // this.obj = this.$route.query.item
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
