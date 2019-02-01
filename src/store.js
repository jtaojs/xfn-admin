import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //公共数据的读取方法:this.$state.adminName
  state: {//当前数据的状态,类似于组件对象的data属性
    adminName:'',//当前登录的管理员名
    globalSettings:{
      apiUrl:'http://jtaotj.applinzi.com'   //初始的默认值
    }
  },
  //公共数据的修改方法:this.$store.commit('setAdminName','boss')
  //公共数据的修改方法:this.$store.commit('setGlobalSettings',{...})
  mutations: {//控制数据的进化,修改数据(即修改state),类似于组件对象中的methods,--用mutation修改数据可以保证数据的响应式
    setAdminName(state,value){
      state.adminName=value
    },
    setGlobalSettings(state,value){
      state.globalSettings=value
    }
  }
})
