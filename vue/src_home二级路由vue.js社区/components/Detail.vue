<template>
    <div>
        <h4>详情路由页面</h4>
        <div v-html="text"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text:""
        };
    },
    created() {
        this.text = this.$route.query.text
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
