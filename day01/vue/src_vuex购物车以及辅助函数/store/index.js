import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    // 全局状态
    state:{
        allCheck:false, // 全选状态
        count:100,
        num:999,
        // 购物车数据
        shopList:[],
        // 商品列表数据
        list:[]
    },
    // 同步方法集合
    mutations:{
        addCount(state,num) {
            
            state.count  = num
        },
        addNum(state) {
            state.num ++
        },
        // 加入购物车的方法
        addShop({ shopList },obj) {
            let index = shopList.findIndex((item)=>{
                return item.id === obj.id
            })
            // console.log(index)
            if(index != -1) {
                // 如果不返回-1，那么在找到的索引，在shoplist找到指定的对象，数量加一
                shopList[index].number ++
            } else {
                // 如果返回-1，添加操作
                shopList.push(obj)
            }
           
        },
        // 全选
        changeAllChecked(state) {
            // 点击全选时，要让当前全选按钮 取反
            state.allCheck = !state.allCheck

            // 讲购物车列表数据同步选中状态
            state.shopList.forEach((item)=>{
                item.checked = state.allCheck
            })
        },
        // 切换选中状态
        changeChecked(state,index) {
            // 切换某一个选中状态
            state.shopList[index].checked = !state.shopList[index].checked

            // 对shoplist每一项进行 循环，每一条对象的checked属性值都为true，那么会返回一个bool，为true
            // 有一条为false，那么bool就是false
            let bool = state.shopList.every((item)=>{
                return item.checked == true
            })
            // 同步全选状态
            state.allCheck = bool
        },
        change(state,val) {
            state.shopList.forEach((item)=>{
                item.checked = val
            })
        },
        // 保存list在仓库
        saveList(state,data) {
            state.list = data
        }
    },
    getters:{
        // 计算属性，算的是仓库中state的数据
        sum(state) {
            // console.log(state)
            let sum = 0
            state.shopList.forEach((item)=>{
                if(item.checked){
                    sum += item.price* item.number
                }
            })
            return sum 
        },
    },
    // 异步方法集合
    actions:{
        ajaxList(context) {
            console.log(context)
            setTimeout(() => {
                axios.get("static/list.json").then((res)=>{
                    console.log(res.data)
                    context.commit("saveList",res.data)
                })
            }, 2000);
        }
    },
    plugins: [createPersistedState()]
})