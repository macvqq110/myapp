<template>
    <div>
        <h4>许愿</h4>
        <input type="text" placeholder="请许愿" v-model="value">
        <div class="box">
            <div :style="{border:activeIndex == index?'2px solid red':''}"
                 :key="index"
                 @click="activeIndex = index"
                 v-for="(item,index) in imgArr">
                <img :src="item" alt="">
            </div>
        </div>
        <button @click="addVow">添加愿望</button>
        <div class="main">
            <div v-drag="index" 
                :style="{
                    background:`url(${item.background}) no-repeat center center / cover`,
                    left:item.left,
                    top:item.top
                }"
                v-for="(item,index) in vowArr" :key="index">
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value:"",
            imgArr:[
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591768062036&di=5f59a69cef27c366fee51ae1dfb38559&imgtype=0&src=http%3A%2F%2Fpic1.bbzhi.com%2Fchahuabizhi%2Flansexi-landiaozhutichouxiangcgbeijing%2Fcartoon_abstract_blue_backgrounds_1920x1200_15833_2.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591768062035&di=b6f602fe84506cc13013dce783e8b7ef&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7c1ed21b0ef41bd5a5ea166a53da81cb38db3df6.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591768062035&di=84d20cf232b69279498fa3e7f3f564ba&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201308%2F24%2F115056yn0krw0u0duwkddb.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591768062035&di=025bea0e493d0eafc9337c7361654530&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F37d12f2eb9389b509193732e8535e5dde7116e5a.jpg",
            ],
            activeIndex:-1,
            vowArr:[]  // 许愿数组
        };
    },
    directives:{
        drag(el,binding,vnode) {
            el.style.position ='absolute';
            el.onmousedown = function(e) {
                var startX = e.clientX - el.offsetLeft;
                var startY = e.clientY - el.offsetTop;
                console.log(binding.value)
                document.onmousemove = function(e) {
                    var endX = e.clientX - startX;
                    var endY = e.clientY- startY;
                    el.style.left = endX  + 'px';
                    el.style.top = endY  + 'px';
                    // 通过vnode虚拟节点可以获取到当前组件实例的数据，
                    // 通过v-drag绑定的值，可以获取到下标
                    vnode.context.$data.vowArr[binding.value].top = el.style.top
                    vnode.context.$data.vowArr[binding.value].left = el.style.left
                }
                document.onmouseup = function() {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        }
    },
    watch:{
        vowArr:{
            handler(val) {
                window.localStorage.setItem("vow",JSON.stringify(this.vowArr))
            },
            deep:true
        }
    },
    created() {
        let vow = window.localStorage.getItem("vow")
        if(vow) {
            this.vowArr = JSON.parse(vow)
        }
    },
    mounted() {

    },
    methods: {
        // 添加愿望方法
        addVow() {
            if(this.activeIndex != -1 && this.value != "") {
                let left = Math.round(Math.random()*400);
                let top = Math.round(Math.random()*400);
                let obj = {
                    value:this.value,
                    background:this.imgArr[this.activeIndex],
                    top:top+"px",
                    left:left+"px"
                }
                this.vowArr.push(obj)
                console.log(this.vowArr)
            } else {
                alert("你还没有操作的项")
            }
            
        }
    }
};
</script>

<style scoped>
    .box{
        display: flex;
        justify-content: center;
    }
    .box>div{
        width:130px;
        height:130px;
        margin:10px;
    }
    .box>div>img{
        width:100%;
        height:100%;

    }
    .main{
        position: relative;
    }
    .main>div{
        width:200px;
        height:200px;
    }
</style>
