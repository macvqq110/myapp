<template>
    <div>
        <h4>child</h4>
        {{ $store.state.count }}
        <button @click="add">+</button>
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
            // this.$store.state.count++
            this.$store.commit("addCount",1000)
        }
    }
};
</script>

<style scoped>

</style>
