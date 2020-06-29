<template>
    <div class="home">
        <h4>百度首页</h4>
        <ul>
            <li><router-link to="/tuijian">推荐</router-link></li>
            <li><router-link to="/hot">热榜</router-link></li>
            <li><router-link to="/kangyi">抗疫</router-link></li>
        </ul>
        <router-view></router-view>
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
        console.log(123456)
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
    .home{
        width:100%;
    }
    .home img {
        width:100%;
    }
    ul{
        list-style: none;
        margin:0;
        padding:0;
        display: flex;
    }
    li{
        margin-left:20px;
    }
</style>    
