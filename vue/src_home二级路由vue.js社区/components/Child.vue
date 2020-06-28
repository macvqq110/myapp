<template>
    <div>
        <ul>
            <li @click="jump(item.content)" v-for="(item) in list" :key="item.id">
                <img width="40" :src="item.author.avatar_url" alt="">
                <span>{{ item.title }}</span>
            </li>
        </ul>
    </div>  
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list:[]
        };
    },
    created() {
        // console.log(this.$route.query.tab)
    },
    // 组件加载完毕
    mounted() {
        this.ajaxList(this.$route.query.tab)
    },
    watch:{
        $route(to) {
            console.log(to)
            this.ajaxList(to.query.tab)
        }
    },
    methods: {
        async ajaxList(tab) {
            // axios.get(`https://www.vue-js.com/api/v1/topics?tab=${tab}`).then((res)=>{
            //     this.list = res.data.data
            // })
            let res = await axios.get(`https://www.vue-js.com/api/v1/topics?tab=${tab}`)
            console.log(res)
            this.list = res.data.data
        },
        jump(text) {
            this.$router.push({
                path:"/detail",
                query:{
                    text:text
                }
            })
        }
    }
};
</script>

<style scoped>
    ul{
        list-style: none;
        text-align: left;
        padding:5px;
    }
    li{
        display: flex;
        align-items: center;
    }
</style>
