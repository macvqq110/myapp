<template>
    <div>
        <h4>shop</h4>
        <button @click="back">返回</button>
        <table>
            <tbody>
                <tr v-for="(item,index) in shopList" :key="item.id">
                    <td><input type="checkbox" :checked="item.checked" @click="changeChecked(index)"></td>
                    <td>
                        <img width="80" :src="item.imgSrc" alt="">
                    </td>
                    <td>
                        {{ item.name }}
                    </td>
                    <td>
                        ￥{{ item.price }}
                    </td>
                    <td>
                        <button>-</button>
                        <span>{{ item.number }}</span>
                        <button>-</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            总价：{{ sum }}
        </div>
        <div>
            <!-- 全选：<input type="checkbox" :checked="allCheck" @click="allCheckFn"> -->
            <input type="checkbox" v-model="all">
        </div>
        {{ count }}++{{ num }}
    </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from 'vuex'

export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    computed:{
        ...mapState(["shopList","num",'count']),
        ...mapGetters(["sum"]),
        // shopList() {
        //     return this.$store.state.shopList
        // },
        allCheck() {
            return this.$store.state.allCheck
        },
        all:{
            // 使用这个all计算属性时，会用到的方法
            get(){
                let bool = this.$store.state.shopList.every((item)=>{
                    return item.checked
                })
                return bool
            },
            // 当计算属性发生改变，执行下面的代码
            set(val){  // val就是变化之后的数据
                this.$store.commit("change",val)
            }
        }

    },
    methods: {
        ...mapMutations(["changeChecked","changeAllChecked"]),
        back() {
            this.$router.back()
            // this.$router.go(-1)
            // this.$router.push("/")
        },
        // // 点击复选框时 可以更新仓库的数据 进行存储
        // toogle(index) {
        //     this.$store.commit("changeChecked",index)
        // },
        // // 点击全选时触发的回调函数
        // allCheckFn() {
        //     this.$store.commit("changeAllChecked")
        // }
    }
};
</script>

<style scoped>
    table{
        width:80%;
        margin: 0 auto;
        border-collapse: collapse;
    }
    td{
        
        border: 1px solid #ddd;
    }
</style>
