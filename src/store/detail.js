import {reqGoodsInfo,reqCardList} from '@/api'
import {getUUId} from '@/utils/uuid_token';
const actions = {
    async getGoodsInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code===200) {
            commit('GETGOODINFO',result.data)
        }
    },
    // 不需要去仓库存储数据 因为数据为空
    async getCardList({commit},{skuId,skuNum}){
        let result = await reqCardList(skuId,skuNum);
        if(result.code == 200) {
            return 'sf'
        }else {
            return Promise.reject(new Error('failure'))
        }
    }
};

const mutations = {
    GETGOODINFO(state,val){
        state.goodInfo = val
    }
};

const state = {
    uuid_token: getUUId(),
    goodInfo: {},
};

const getters = {
    categoryView(state){
        //如果数据没有返回结果为undefined 在detail组件里会报错
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }

};

export default {
    state,
    actions,
    getters,
    mutations
}