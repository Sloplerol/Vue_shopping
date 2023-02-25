import {reqGetSearchInfo} from '@/api';

const state = {

    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,val){
        state.searchList = val;
    }
};
const actions = {

  getsearchlist({ commit }, params = {}) {
    reqGetSearchInfo(params).then((result) => {
      if(result.code == 200) {
        commit('GETSEARCHLIST',result.data);
      }
    });
  }
};
// 通过getters来简在组件中获取数据的过程
const getters = {
    goodsList(state){
        // 当请求返回数据失败为undefined从undefined里取数据会报错所以用空数组进行代替
        return state.searchList.goodsList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
}

export default {
    actions,
    mutations,
    state,
    getters
}