import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import moduleB from './moduleB'

Vue.use(Vuex)

let moduleA = {
    namespaced:true, // 开启命名空间，作用就是区分模块，给每一个模块加上一个命名空间
    state:{
        count:200
    },
    mutations:{
        changeCount(state){
            state.count ++
        },
        setCount(state) {
            state.count+=10000
        }
    },
    actions:{
        ajaxCount(context) {
            setTimeout(()=>{
                context.commit("setCount")
            },2000)
        }
    }
}


export default new Vuex.Store({
    // 全局状态
    // state:{
    //     count:100,
    //     num:999
    // },
    // // 同步方法集合
    // mutations:{
    //     addCount(state,num) {
            
    //         state.count  = num
    //     }
    // },
    // plugins: [createPersistedState()]

    modules:{
        moduleA:moduleA,  // A同学
        moduleB:moduleB   // B同学
    }
})