<template>
    <div>
        <h4>推荐的内容</h4>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            
        };
    },
    created() {

    },
    mounted() {
        axios.get(`https://www.vue-js.com/api/v1/topics?tab=all`).then((res)=>{
            console.log(res)
        })
    },
    methods: {

    }
};
</script>

<style scoped>

</style>
