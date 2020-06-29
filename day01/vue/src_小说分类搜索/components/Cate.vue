<template>
    <div>
        <div class="header">分类</div>
        <div v-for="(item,index) in result" :key="index">
            <h4>{{ item.title }}</h4>
            <ul class="item">
                <li v-for="(v,i) in item.lei" :key="i">
                    <p>{{ v.name }}</p>
                    <p>{{ v.shu }}</p>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            result:[]
        };
    },
    created() {

    },
    async mounted() {
      let { data:res } =  await this.$http.get(`static/cate.json`)
      console.log(res)
      this.result = res
      
    },
    methods: {

    }
};
</script>

<style scoped>
    .item{
        display: flex;
        margin:0;
        padding:0;
        flex-wrap: wrap;
        list-style: none;
    }
    .item>li{
        width:33%;
    }
</style>
