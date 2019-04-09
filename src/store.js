import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let state={
  ary:[],
  arrac:null,
  ind:null,
  tanshu:"兑换成功"
}
export default new Vuex.Store({
  state,
  getters:{
    
  },
  mutations: {
    toMu(state,index){
      state.ind = index
      state.arrac = state.ary[index]
      console.log(state.arrac)
    },
    toJifeng(state,toJifeng){
      const index = state.ind
     let {ji} = state.ary[index]
     console.log(ji)
     console.log(ji,toJifeng)
     if(ji<toJifeng){
        state.tanshu='积分不够了'
        return
     }
     else{
      state.tanshu='兑换成功'
     }
     state.ary[index].ji-=toJifeng
    }
  },
  actions: {
       // commit 提交到 mutation
    actionAdd({commit},index) { // 流程2
      // console.log("aa",index)
      commit('toMu',index) // 流程3
    },
    actionXiu({commit},jifeng){
      commit('toJifeng',jifeng)
    }
  }
})
