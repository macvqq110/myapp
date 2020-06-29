<template>
    <div>
        {{ count }}
        <button @click="count++">数字加</button>
    </div>
</template>

<script>
export default {
    name:"count",
    data() {
        return {
            count:0
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
