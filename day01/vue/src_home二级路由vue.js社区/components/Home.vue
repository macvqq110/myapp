<template>
    <div>
        <h4>home首页</h4>
        <ul>
            <li @click="toogle(index,item.tab)" :style="{background:activeIndex == index?'pink':''}" v-for="(item,index) in tabArr" :key="index">
                {{ item.tabName }}
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex:0,
            tabArr:[
                {
                    tabName:"全部",
                    tab:"all"
                },
                {
                    tabName:"精华",
                    tab:"good"
                },
                {
                    tabName:"weex",
                    tab:"weex"
                },
                {
                    tabName:"分享",
                    tab:"share"
                },
                {
                    tabName:"问答",
                    tab:"ask"
                },
                {
                    tabName:"招聘",
                    tab:"job"
                }
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        // 切换路由并且选中样式切换
        toogle(index,tab) {
            // console.log(tab)
            // 选中样式切换
            this.activeIndex = index

            // 二级路由切换，并且传递给二级路由一个参数，告诉他你点击的是哪一个按钮
            this.$router.push({
                path:"/home/child",
                query:{
                    tab
                }
            })
        }
    }
};
</script>

<style scoped>
    ul{
        list-style: none;
        display: flex;
        margin:0;
        padding:0;
    }
    li{
        padding:5px 10px;
        background: #efefef;
        margin-left: 5px;
    }
</style>
