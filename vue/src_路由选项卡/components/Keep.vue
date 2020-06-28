<template>
    <div>
        <h4>keepalive</h4>

        <keep-alive :include="/todo|count/">
            <Todo v-if="tab == 0"></Todo>
            <Count v-if="tab == 1"></Count>
        </keep-alive>

        <button @click="tab=0">显示内容1</button>
        <button @click="tab=1">显示内容2</button>
    </div>
</template>

<script>
import Count from './Count'
import Todo from './Todo'
export default {
    data() {
        return {
            tab:0
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components:{
        Todo,Count
    }
};
</script>

<style scoped>

</style>
