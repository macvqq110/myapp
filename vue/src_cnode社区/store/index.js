import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    // 全局状态
    state:{
        count:100,
        num:999,
        activeIndex:0,
        // 请求信息对象
        queryInfo:{
            tab:"all",
            limit:10,
            page:1
        },
    },
    // 同步方法集合
    mutations:{
        addCount(state,num) {
            
            state.count  = num
        },
        changeIndex(state,obj) {
            console.log(obj)
            // 改变切换的样式 并且存到了vuex中
            state.activeIndex = obj.index
            //改变tab切换状态
            state.queryInfo.tab = obj.tab
        },
        // 改变页码数
        cPage(state,num) {
            state.queryInfo.page = num
        }
    },
    plugins: [createPersistedState()]
})