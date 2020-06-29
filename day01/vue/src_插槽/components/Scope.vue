<template>
    <div>
        <h4>scope</h4>
        <slot :arr="arr" index="132456">
            <div v-for="(item,index) in arr" :key="index">
                <p>name:{{ item.name }}</p>
                <p>age:{{ item.age }}</p>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[
                {
                    name:"张飞",
                    age:18
                },
                {
                    name:"关羽",
                    age:9
                },
                {
                    name:"刘备",
                    age:20
                },
                {
                    name:"关羽123",
                    age:16
                },
                {
                    name:"刘备41421",
                    age:29
                }
            ]
        };
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

</style>
