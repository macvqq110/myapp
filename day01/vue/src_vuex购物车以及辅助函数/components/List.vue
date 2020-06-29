<template>
    <div>
        <h4>list</h4>
        <table>
            <tbody>
                <tr v-for="(item) in listData" :key="item.id">
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
                        <button @click="addShopFn(item)">加入购物车</button>
                    </td>
                </tr>
            </tbody>
        </table>
        {{ list }}
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    data() {
        return {
            list:"123456"
        };
    },
    created() {

    },
    mounted() {
        this.$store.dispatch("ajaxList")
    },
    methods: {
        ...mapMutations({add:"addShop"}),
        addShopFn(item) {
            // 调用同步方法，同步仓库中的state中的shopList
            // this.$store.commit("addShop",item)
            this.add(item)

            // 跳转
            this.$router.push("/shop")
        }
    },
    computed:{
        // list() {
        //     return this.$store.state.list
        // },
        // ...mapState(["list"]),
        ...mapState({listData:"list"})
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
