<template>
    <div>
        <h4>look</h4>
        <hr>
        <ul>    
            <li @click="jump(index)" v-for="(item,index) in arr" :key="index">
                {{ item.name }}
            </li>
        </ul>

        <hr>
        <transition name="left">
            <router-view class="r"></router-view>
        </transition>
        
    </div>
</template>

<script>
import '../assets/left.css'
export default {
    data() {
        return {
            arr:[
                {
                    name:"推荐"
                },
                {
                    name:"热榜"
                },
                {
                    name:"抗疫"
                }
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        jump(index) {
            console.log(index)
            if(index == 0) {
                // this.$router.push("/look/child_tuijian")
                this.$router.push({
                    path:"/look/child_tuijian"
                })
            } else if (index == 1) {
                // this.$router.push("/look/child_hot")
                this.$router.push({
                    path:"/look/child_hot"
                })
            } else {
                console.log("抗疫")
            }
            // let str = ""
            // if(index == 0) {
            //     str = "推荐"
            // } else if(index == 1) {
            //     str = "热榜"
            // }
            // else {
            //     str = "抗疫"
            // }
            // // 编程式跳转
            // this.$router.push({
            //     path:"/look/child",
            //     query:{
            //         str
            //     }
            // })
            // console.log(str)
            // this.$router.push({
            //    name:"Child",
            //    params:{
            //        str
            //    }
            // })
        }
    }
};
</script>

<style scoped>
    ul{
        list-style: none;
        display: flex;
    }
    li{
        padding:5px 10px;
        margin-left:15px;
    }
    .r{
        background: fuchsia;
        position: absolute;
        width:100%;
    }
</style>
