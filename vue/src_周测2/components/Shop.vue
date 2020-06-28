<template>
    <div>
        <h4>张三的商品</h4>
        <table>
            <tbody>
                <tr v-for="(item,index) in shopList" :key="item.id">
                    <td>
                        <img :src="item.img" alt="">
                    </td>
                    <td>
                        {{ item.name }}
                    </td>
                    <td>
                        <button @click="countChange(index,'-')">-</button>
                        <input type="text" v-model="item.num">
                        <button @click="countChange(index,'+')">+</button>
                    </td>
                    <td>
                        <button @click="del(index)">X</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="sum">总价：{{ sum }}</div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            shopList:[
                {
                    id:1,
                    img:"static/imgs/a.jpg",
                    name:"TCL彩电",
                    num:1,
                    price:1000
                },
                {
                    id:2,
                    img:"static/imgs/b.jpg",
                    name:"机顶盒",
                    num:1,
                    price:1000
                },
                {
                    id:3,
                    img:"static/imgs/c.jpg",
                    name:"海尔冰箱",
                    num:1,
                    price:1000
                },
                {
                    id:4,
                    img:"static/imgs/d.jpg",
                    name:"小米手机",
                    num:1,
                    price:1000
                },
                {
                    id:5,
                    img:"static/imgs/e.jpg",
                    name:"PPTV电视",
                    num:1,
                    price:"1000"
                }
            ]
        };
    },
    computed:{
        sum() {
            let sum = 0
            this.shopList.forEach((item)=>{
                sum+= item.price*item.num
            })
            return sum 
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        del(i) {
            this.shopList.splice(i,1)
        },
        // 点击加减按钮
        countChange(index,s) {
            if(s == "+") {
                this.shopList[index].num ++
            } else {
                this.shopList[index].num --
                if(this.shopList[index].num<=0){
                    var r = confirm("您是否要删除");
                    if (r == true) {
                        this.shopList.splice(index,1)
                    } else {
                        this.shopList[index].num ++
                    }
                    
                }
            }

        }
    }
};
</script>

<style scoped>
    table{
        width:80%;
        margin:0 auto;
        border-collapse: collapse;
        background: pink;
    }

    td{
        border: 1px solid #efefef;
    }
    .sum{
        background: khaki;
        text-align: center;
        height:100px;
        line-height: 100px;
    }
</style>
