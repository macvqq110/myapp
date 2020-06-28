<template>
    <div>
        <h4>好看视频</h4>
        <ul>
            <li v-for="(item) in videoArr" :key="item.id">
                <span>{{ item.name }}</span>
                <button @click="jump(item.name)">+</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videoArr:[
                {
                    name:"哪吒之魔童降世",
                    id:1
                },
                {
                    name:"战斗女神爱丽丝",
                    id:2
                },
                {
                    name:"唐人街",
                    id:3
                }
            ]
        };
    },
    created() {

    },
    mounted() {
    // console.log(this.$route)
    },
    methods: {

        jump(name) {
            this.$router.push({
                path:"/book",
                query:{
                    name
                }
            })
        }
    }
};
</script>

<style scoped>

</style>
