export default {
    namespaced:true,
    state:{
        count:1000
    },
    mutations:{
        changeCount(state){
            state.count +=10
        },
        setCount(state) {
            state.count+=9999999999
        }
    },
    actions:{
        ajaxCount(context) {
            setTimeout(()=>{
                context.commit("setCount")
            },3000)
        }
    }
}
