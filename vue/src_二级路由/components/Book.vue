<template>
    <div>
        <h4>book</h4>
        <!-- <div v-if="name">
            视频名称：{{ name }}
        </div> -->
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                {{ item }}
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:"",
            arr:[]
        };
    },
    created() {
        // console.log(this.$route)
        // this.arr.push(this.$route.query.name)
        // console.log(this.arr)
    },
    mounted() {

    },
    activated() {
        console.log(this.$route)
        this.arr.push(this.$route.query.name)
        console.log(this.arr)
    },
    methods: {

    }
};
</script>

<style scoped>

</style>
