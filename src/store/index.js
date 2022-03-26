import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import search from './search'
import home from './home'
import detail from './detail'
export default new Vuex.Store({
  //实现Vuex仓库模块式开发存储数据
  modules:{
      home,
      search,
      detail
  }
})