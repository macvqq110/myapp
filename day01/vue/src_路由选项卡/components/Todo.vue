<template>
    <div>
        <input type="text" v-model="value">
        <button @click="add">添加</button>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"todo",
    data() {
        return {
            value:"",
            list:[]
        };
    },
    created() {
        console.log("创建后的生命周期")
    },
    mounted() {

    },
    // 进入到动态组件时
    activated() {
        console.log("keepalive 进入到动态组件时")
    },
    // 离开动态组件时
    deactivated() {
        console.log("keepalive 离开到动态组件时")
    },
    methods: {
        add() {
            this.list.push(this.value)
        }
    }
};
</script>

<style scoped>

</style>
