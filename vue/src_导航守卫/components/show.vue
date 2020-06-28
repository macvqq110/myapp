<template>
    <div class="show">
        <h2>视频</h2>
        <input type="text">
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },  
    created() {

    },
    mounted() {

    },
    methods: {
        to(){
           this.$router.push({
                    path:'/list'
                })
        }
    }
};
</script>

<style scoped>
.show{
    height:95%;
    width:100%;
    background: pink;
    text-align: center;
}
</style>
