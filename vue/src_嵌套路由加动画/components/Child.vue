<template>
    <div>
        <h4>child组件</h4>
        <p>{{ str }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            str:""
        };
    },
    created() {
        console.log(this.$route)
        this.str = this.$route.query.str
    },
    watch:{
        $route(to,from) {
            console.log(to,from)
            this.str = this.$route.query.str
        }
        // "$route.params.str":function(to,from) {
        //     console.log(123)
        // }
        // $route(){
        //     if(this.$route.params!==null){
        //         this.paramStr = this.$route.params.str;
        //     }
        // },
        // paramStr(newVal,oldVal){
        //     if(newVal !== undefined && newVal !== null){
        //         this.str = this.$route.params.str
        //     }
        // }
    },
    // 组件确认钩子，路由守卫
    beforeRouteEnter(to,from,next) {
        console.log(to,from)
        next()
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
