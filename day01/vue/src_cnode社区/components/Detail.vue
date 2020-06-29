<template>
    <div>
       <h4>detail</h4>
       <div v-html="content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content:""
        };
    },
    created() {

    },
    mounted() {
        this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.query.id}`).then((res)=>{
            console.log(res)
            this.content = res.data.data.content
        })
    },
    methods: {

    }
};
</script>

<style scoped>

</style>
