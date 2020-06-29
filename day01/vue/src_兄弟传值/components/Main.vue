<template>
    <div class="main">
        <!-- <app-header title="内容主题标题"></app-header> -->
        <p>内容主体</p>
        
        <div v-show="tabIndex == 0">首页</div>
        <div v-show="tabIndex == 1">视频</div>
        <div v-show="tabIndex == 2">任务</div>
        <div v-show="tabIndex == 3">小说</div>
        <div v-show="tabIndex == 4">我的</div>
    </div>
</template>

<script>
import appHeader from './Header'
import bus from '@/assets/bus'
export default {
    data() {
        return {
            tabIndex:1
        };
    },
    components:{
        appHeader
    },
    created() {
        bus.$on("busData",(res)=>{
            console.log(res)  // 索引
            this.tabIndex = res
            console.log(this)
        })
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
    .main>div{
        width: 60%;;
        height:300px;
        margin:0 auto;
        background: chartreuse;
    }
</style>
