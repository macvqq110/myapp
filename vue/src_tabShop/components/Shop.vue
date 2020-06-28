<template>
    <div>
        <h4>购物清单</h4>
        <ul class="item">
            <li v-for="(item,index) in shopList" :key="index">
                <div>
                    <input type="checkbox" v-model="item.checked">
                </div>
                <div>
                    <img :src="item.img" alt="">
                </div>
                <div>
                    <p>{{ item.name }}</p>
                    <p>{{ '￥'+item.price }}</p>
                    <p>{{ item.pay }}人付款</p>
                </div>
                <div>
                   <button>-</button>
                   <span>{{ item.num }}</span>
                   <button>+</button>
                </div>
            </li>
        </ul>
        <div>
            全选：<input type="checkbox">
            <div>合计：{{ sum }}</div>
            <div>结算（{{ num }}）</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shopList:[]
        };
    },
    computed:{
        num() {
            let count = 0
            this.shopList.forEach((item)=>{
                if(item.checked) {
                    count++
                }
            })
            return count
        },
        sum() {
            let count = 0
            this.shopList.forEach((item)=>{
                if(item.checked) {
                    count+= item.price*item.num
                }
            })
            return count
        }
    },
    created() {
        let sl = window.localStorage.getItem("shopList")
        this.shopList = sl?JSON.parse(sl):[]
    },
    mounted() {

    },
    methods: {

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
