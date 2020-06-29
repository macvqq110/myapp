<template>
    <div>
        <h4>商品列表</h4>
        <ul class="ul">
            <li @click="tabChange(index,item.type)"
                :class="activeIndex == index?'active':''"
                v-for="(item,index) in tabArr" :key="index">
                {{ item.name }}
            </li>
        </ul>
        <!-- 排序 -->
        <ul class="ul" style="background:#fff;border:1px solid #efefef;">
            <li @click="sort(index)" :style="{color:sortIndex == index?'red':'#000'}" v-for="(item,index) in sortArr" :key="index">
                {{ item }}
            </li>
        </ul>
        <ul class="item">
            <li v-for="(item,index) in showList" :key="index">
                <div>
                    <img :src="item.img" alt="">
                </div>
                <div>
                    <p>{{ item.name }}</p>
                    <p>{{ '￥'+item.price }}</p>
                    <p>{{ item.pay }}人付款</p>
                </div>
                <div>
                    <button @click="addShop(item)">+</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex:0,
            sortIndex:0,
            tabArr:[
                {
                    name:"推荐",
                    type:"tuijian"
                },{
                    name:"母婴",
                    type:"muying"
                },{
                    name:"鞋包饰品",
                    type:"xeibaoshipin"
                },{
                    name:"食品",
                    type:"shipin"
                },{
                    name:"数码家具",
                    type:"shumajiaju"
                }
            ],
            list:[
                {
                    id:1,
                    img:"static/imgs/a.jpg",
                    name:"头戴耳机",
                    num:1,
                    pay:1872,
                    type:"tuijian",
                    price:558,
                    checked:false
                },
                {
                    id:2,
                    img:"static/imgs/b.jpg",
                    name:"高钙奶粉",
                    type:"muying",
                    num:1,
                    pay:2374,
                    price:60,
                    checked:false
                },
                {
                    id:3,
                    img:"static/imgs/c.jpg",
                    name:"多用锅",
                    num:1,
                    type:"tuijian",
                    pay:351,
                    price:216,
                    checked:false
                },
                {
                    id:4,
                    img:"static/imgs/d.jpg",
                    name:"潮流表",
                    num:1,
                    type:"shumajiaju",
                    pay:8191,
                    price:585,
                    checked:false
                },
                {
                    id:4,
                    img:"static/imgs/d.jpg",
                    name:"潮流表123",
                    num:1,
                    type:"tuijian",
                    pay:800,
                    price:5000,
                    checked:false
                },
                {
                    id:5,
                    img:"static/imgs/e.jpg",
                    name:"乐高机器人积木",
                    num:1,
                    type:"muying",
                    pay:165,
                    price:"3099",
                    checked:false
                },
                {
                    id:6,
                    img:"static/imgs/d.jpg",
                    name:"潮流表123",
                    num:1,
                    type:"shumajiaju",
                    pay:8191,
                    price:585,
                    checked:false
                },
                {
                    id:7,
                    img:"static/imgs/e.jpg",
                    name:"北京烤鸭",
                    num:1,
                    type:"shipin",
                    pay:165,
                    price:"3099",
                    checked:false
                }
            ],
            showList:[], // 展示给用户
            sortArr:[
                "综合排序",
                '销量优先',
                '价格'
            ]
        };
    },
    created() {

    },
    mounted() {
        //TODO 接口请求回来的list，进行同步到data
        // this.showList = JSON.parse(JSON.stringify(this.list))
        this.showList = this.list.filter((item)=>{
            return item.type === "tuijian"
        })
    },
    methods: {
        // 选项卡切换的方法
        tabChange(i,type) {
            this.activeIndex = i
            let arr = this.list.filter((item)=>{
                return item.type === type
            })
            this.showList = arr
        },
        // 排序
        sort(index) {
            // console.log(index)
            this.sortIndex = index
            if(index == 0) {
                // 说明用户点击综合排序
            } else if (index == 1) {
                // 销量排序，使用的就是sort，通过pay进行排序
                this.showList.sort((a,b)=>{
                    return b.pay - a.pay
                })
            } else {
                // 价格排序
                this.showList.sort((a,b)=>{
                    return b.price - a.price
                })
            }
        },
        // 加入购物车方法
        addShop(item) {
            console.log(item)
            let shop = window.localStorage.getItem("shopList")
            let arr = shop?JSON.parse(shop):[]
            // let arr = []
            // let shoparr = window.localStorage.getItem("shopList")
            // if(shoparr) {
            //     arr = JSON.parse(shoparr)
            // }
            // 在购物车页面中使用的数据中，进行查找，找到符合条件的下标，就返回一个索引，否则-1
            let index = arr.findIndex((obj)=>{
                return obj.id === item.id
            })
            if(index != -1) {
                // 不等于-1 证明 第多次点击
                arr[index].num ++
            } else {
                // 等于-1 证明第一次添加
                arr.push(item)
            }
            
            window.localStorage.setItem("shopList",JSON.stringify(arr))

            // js 编程式跳转路由
            this.$router.push({
                path:"/shop",
            })
            console.log(this)
        }
    }
};
</script>

<style scoped>
    .item{
        list-style: none;
        margin:0;
        padding:0;
    }
    .item>li{
        display: flex;
        justify-content: space-around;
        align-items: center;
        border:1px solid #efefef;
    }
</style>
