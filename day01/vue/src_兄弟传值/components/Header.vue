<template>
    <div class="header">
        <div>{{ obj.left }}</div>
        <div>{{ obj.title }}</div>
        <div>{{ obj.right }}</div>
        <!-- {{ arr }}
        <div v-for="(item,index) in arr" :key="index">
            {{ item }}
        </div> -->
    </div>
</template>

<script>
export default {
    props:{
        // title:{
        //     type:String,
        //     default:""
        // },
        // leftBtn:{
        //     type:String,
        //     default:""
        // }
        obj:{
            type:Object,
            default:{}
        },
        
    },
    // props:['arr'],
    data() {
        return {

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
    .header{
        background: #ddd;
        display: flex;
        justify-content: space-between;
        height: 45px;
        line-height: 45px;
    }
    .app{
        border:5px solid red;
    }
</style>
