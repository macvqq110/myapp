<template>
    <div>
        <el-input
            @change="enter"
            placeholder="请输入内容"
            v-model="keyword">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <ul class="item">
            <li v-for="(item,index) in hot" :key="index">
                {{ item.name }}
            </li>
        </ul>
        <ul class="posi" v-show="keyword.length>0">
            <li v-for="(item,index) in list" :key="index">
                {{ item.name }}
            </li>
        </ul>
        <hr>
        <h4>搜索记录</h4>
        <i @click="del" class="el-icon-delete"></i>
        <p>
            <span v-for="(item,index) in searList" :key="index">
                {{ item }}
            </span>
        </p>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword:"", // 搜索得关键字
            hot:[],
            searList:[],  // 搜索历史
            list:[]  // 渲染得就是搜索之后得内容
        };
    },
    created() {
        let s = localStorage.getItem("searchList")
        if(s) {
            this.searList = JSON.parse(s)
        }
    },
    watch:{
        async keyword(val) {
            let { data } = await this.$http.get(`static/search.json`)
            this.list = data
        }
    },
    mounted() {
        this.ajaxHot()
    },
    methods: {
        async ajaxHot() {
            let { data }  = await this.$http.get("static/keywords.json")
            console.log(data)
            this.hot = data.tueijian
        },
        enter() {
            console.log("回车")
            console.log(this.keyword)
            // 如果本地存储中有
            let searList = window.localStorage.getItem("searchList")
            if(searList){
                // 直接给搜索历史
                this.searList = JSON.parse(searList)
            } else {
                this.searList = []
            }
            // 添加数据到搜索历史
            this.searList.push(this.keyword)
            window.localStorage.setItem("searchList",JSON.stringify(this.searList))
            this.keyword = ""
        },
        del() {
            this.searList = []
            window.localStorage.setItem("searchList",[])
        }

    }
};
</script>

<style scoped>
    .item{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin:0;
        padding:0;
    }
    .item>li{
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 5px 10px;
        margin-left:10px;
        margin-top:20px;
    }
    .posi{
        position: absolute;
        left:0;
        top:50px;
        z-index: 500;
        background: #fff;
        height:500px;
        width:100%;
        padding:0;
        margin:0;
    }
    .posi>li{
        border-bottom:1px solid #ddd;
    }
</style>
