<template>
    <div class='transfer'>
        <div class="header">
            <p>
                <input type="checkbox" v-model="allCheck">
            </p>
            <p>
                列表
            </p>
            <p>{{ checkCount }}/{{ arr.length }}</p>
        </div>
        <div>   
            <input type="text" v-model="search">
            <ul>
                <li v-for="(item) in arr" :key="item.id" v-show="item.done">
                    <p>
                        <input type="checkbox" v-model="item.checked">
                    </p>
                    <p>
                        {{ item.name }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:["arr"],
    data() {
        return {
            search:""
        };
    },
    watch:{
        search(newVal) {
            this.arr.forEach((item)=>{
                if(item.name.includes(newVal)){
                    item.done = true
                } else {
                    item.done = false
                }
            })
        }
    },
    computed:{
        // 计算属性
        allCheck:{
            // 表示的是在使用allcheck计算属性时，触发
            get() {
                let bool = this.arr.every((item)=>{
                    return item.checked
                })
                console.log(bool)
                return bool
            },
            // 表示的是当allcheck计算属性发生改变时
            set(val) {
                this.arr.forEach((item)=>{
                    item.checked = val
                })
            }
        },
        checkCount() {
            let sum = 0
            this.arr.forEach((item)=>{
                if(item.checked) {
                    sum ++
                }
            })
            return  sum
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
    .transfer{
        width:300px;
        height:500px;
        background:pink;
    }
    .transfer>div{
        width:300px;
    }
    .header{
        display:flex;
        background:#efefef;
        justify-content: space-around;
    }
    li{
        display:flex;
    }
    ul>li>p:nth-child(2){
        margin-left:10px;
    }
</style>
