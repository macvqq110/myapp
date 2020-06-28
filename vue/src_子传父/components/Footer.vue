<template>
    <div class="footer">
        <ul>
            <li @click="clickFn(index)" :class="activeIndex == index?'active':''" v-for="(item,index) in footer" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            activeIndex:2
        };
    },
    props:["footer"],
    created() {

    },
    mounted() {

    },
    methods: {
        clickFn(index) {
            this.activeIndex = index
            console.log(index)
            console.log(this)
            this.$emit("foot",{ index })
        }
    }
};
</script>

<style scoped>
    ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
        height: 45px;
        line-height: 45px;
        text-align: center;
        margin:0;
        padding:0;
    }
    li{
        color:#fff;
        flex:1;
    }
    .active{
        background: pink;
    }
</style>
