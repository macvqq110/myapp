<template>
    <div>
        {{ count }}
        <button @click="count ++">++</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count:10
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
