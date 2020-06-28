<template>
    <div>
        {{ $store.state.num }}
        <button @click="add">num++</button>
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
        add() {
            this.$store.commit("addNum")   
        }
    }
};
</script>

<style scoped>

</style>
