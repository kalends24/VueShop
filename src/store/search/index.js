import { reqGetSearchInfo } from "@/api"
//search模块的小仓库
const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        /**  当前这个reqGetSearchInfo这个函数在调用获取服务器的时候，至少传递一个参数（空对象）
         * params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
         */
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    }
}
//vuex中的计算属性 简化仓库中的数据
const getters = {
    /* 假如网络断开，返回的是underfined 所以至少设置个空数组 */
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}