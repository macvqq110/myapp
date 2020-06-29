<template>
    <div class="header">
        <div>
            <slot name="left">
                <div @click="backChild">返回</div>
            </slot>
        </div>
        <div>
            <slot name="title">
                <div :style="{fontSize:size}">
                    标题
                </div>
            </slot>
        </div>
        <div>
            <slot name="left">
                <div @click="shareChild">分享</div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props:["size"],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        backChild() {
            this.$emit("back")
        },
        shareChild() {
            this.$emit("share")
        }
    }
};
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        padding:2px 5px;
    }
    .header>div{
        height:45px;
        line-height: 45px;
    }
</style>
