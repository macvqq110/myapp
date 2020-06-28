<template>
    <div>
        <div>
            <img style="width: 100%;" src="static/imgs/header.png" alt="">
        </div>
        <ul class="ul">
            <li class="li" @click="toogle(index,item.tab)" :style="{background:activeIndex == index?'pink':''}" v-for="(item,index) in tabArr" :key="index">
                {{ item.name }}
            </li>
        </ul>
        <ul class="list">
            <li v-for="(item,index) in list" :key="index">
                <img :src="item.author.avatar_url" :title="item.author.loginname" alt="">
                <template v-if="queryInfo.tab != 'job' && queryInfo.tab != 'ask'">
                    <span class="btn" :style="{background:item.top?'red':''}">{{ item.top?"置顶":item.tab | testFilter }}</span>
                </template>
                
                
                <div class="spans">
                    <span @click="jumpDetail(item.id)" class="title">{{ item.title }}</span>
                    <span class="time">{{ item.create_at | timeFn }}</span>
                </div>
                
            </li>
        </ul>
        <el-pagination
            background
            layout="prev, pager, next"
            @current-change=changePage
            :total="100"
            :current-page="queryInfo.page"
            >
        </el-pagination>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    data() {
        return {
            list:[],
            tabArr:[
                {
                    name:"全部",
                    tab:"all"
                },
                {
                    name:"精华",
                    tab:"good"
                },
                {
                    name:"分享",
                    tab:"share"
                },
                {
                    name:"问答",
                    tab:"ask"
                },
                {
                    name:"招聘",
                    tab:"job"
                },
                {
                    name:"客户端测试",
                    tab:"dev"
                }
            ]
        };
    },
    computed:{
        ...mapState(["activeIndex","queryInfo"])
    },
    created() {

    },
    filters:{
        testFilter(val) {
            switch(val) {
                case "置顶":
                return "置顶";
                case "share":
                return "分享";
                case "ask":
                return "问答";
                case "job":
                return "招聘";
                case "good":
                return "精华";
                case "dev":
                return "测试";
            }
        }
    },
    mounted() {
        this.ajaxList()
    },
    methods: {
        ...mapMutations(["changeIndex","cPage"]),
        toogle(index,tab) {
            // this.changeIndex({index,tab})
            this.$store.commit("changeIndex",{index:index,tab:tab})
            this.ajaxList()
        },
        // 获取接口数据
        async ajaxList(tab) {
            let { data:res } = await this.$axios.get(`https://cnodejs.org/api/v1/topics`,{params:this.queryInfo})
            console.log(res)
            this.list = res.data
            console.log(this.list)
        },
        // 当页数发生改变时触发
        changePage(i) {
            this.cPage(i)
            this.ajaxList()
            // console.log(i)
        },
        
        
        jumpDetail(id) {
            this.$router.push({
                path:"/detail",
                query:{
                    id
                }
            })
        }
        
    }
};
</script>

<style scoped>
    .ul{
        list-style: none;
        margin:0;
        padding:0;
        display: flex;
    }
    .li{
        font-size: 0.48rem;
        padding: 0.05rem 0.3rem;
    }
    .list{
        list-style: none;
        margin:0;
        padding:0;
    }
    .list>li{
        font-size: 0.48rem;
        display: flex;
        align-items: center;
        margin-top:.4rem;
    }
    .list>li>img{
        width: 1rem;
        height:1rem;
    }
    .title{
        font-size: .36rem;
        display: inline-block;
        width:6rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .time{
         font-size: .36rem;
         width:20%;
         display: inline-block;
    }
    .spans{
        display: flex;
        justify-content: space-between;
        margin-left:.5rem;
    }
    .btn{
        padding:5px;
        background: #ddd;
    }
</style>
