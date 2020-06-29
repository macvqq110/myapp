<template>
    <div>
        <h4>河北路由页面</h4>

        <button @click="jump">我想进北京</button>
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
        jump() {
            this.$router.push({
                path:"/"
            })
        }
    }
};
</script>

<style scoped>
    div{
        background: pink;
        height: 100%;
    }
</style>
