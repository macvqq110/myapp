<template>
    <div>
        <h4>child</h4>
        模块A：
        {{ aCount }}
        <button @click="addMA">+</button>
        <button @click="actionA">actionsA异步方法</button>
        <hr>
        模块B：
        {{ bCount }}
        <button @click="addMB">+</button>
        <button @click="actionB">actionsB异步方法</button>
    </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'
export default {
    data() {
        return {

        };
    },
    created() {
        console.log(this.$store)
    },
    mounted() {

    },
    computed:{
        ...mapState("moduleA",{aCount:"count"}),
        ...mapState("moduleB",{bCount:"count"})
        // mA() {
        //     return this.$store.state.moduleA.count
        // },
        // mB() {
        //     return this.$store.state.moduleB.count
        // }
    },
    methods: {
        // ...mapMutations(["changeCount"]),
        ...mapMutations("moduleA",{aa:"changeCount"}),
        ...mapMutations("moduleB",{bb:"changeCount"}),
        // 将模块A中的 count ++
        addMA() {
            // this.$store.commit("moduleA/changeCount")
            this.aa()
        },
        // 将模块B中的 count ++
        addMB() {
            // this.$store.commit("moduleB/changeCount")
            this.bb()
        },
        // 异步A
        actionA() {
            this.$store.dispatch("moduleA/ajaxCount")
        },
        //异步B
        actionB() {
            this.$store.dispatch("moduleB/ajaxCount")
        }


    }
};
</script>

<style scoped>

</style>
