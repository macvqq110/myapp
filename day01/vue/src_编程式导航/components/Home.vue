<template>
    <div>
        <h3>home</h3>
        home12354656456465465

        <div class="shoplist">
            <ul>
                <li v-for="(item) in arr" :key="item.id">
                    <p>{{ item.name }}</p>
                    <!-- <button v-jump="{ path,item }">+</button> -->
                    <button @click="add(item)">+</button>
                </li>
            </ul>
        </div>
        <button @click="go">前进1</button>
        <button @click="back">后退2</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            path:"/shop",
            arr:[
                {
                    id:1,
                    img:"static/imgs/a.jpg",
                    name:"头戴耳机",
                    num:1,
                    pay:1872,
                    type:"tuijian",
                    price:558,
                    checked:false,
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
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        add(item) {
            console.log(this)
            this.$router.push({
                path:"/shop",
                query:{
                    item
                }
            })

            // this.$router.push({
            //     name:"Shop",
            //     // query:{
            //     //     item
            //     // }
            //     params:{
            //        item 
            //     }
            // })
        },
        go() {
            this.$router.go(1)
        },
        back() {
            this.$router.back()
        }
    }
};
</script>

<style scoped>

</style>
