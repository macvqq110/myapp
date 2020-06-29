import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    // 全局状态
    state:{
        count:100,
        num:999
    },
    // 同步方法集合
    mutations:{
        addCount(state,num) {
            
            state.count  = num
        }
    },
    plugins: [createPersistedState()]
})