<template>
    <div>
        <h4>key组件</h4>
        <div>
            <input v-if="isShow" type="text" placeholder="用户名" key="user" name="user">
            <input v-if="!isShow" type="text" placeholder="密码" key="password" name="password">
            <button @click="isShow = !isShow">切换</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow:true
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
