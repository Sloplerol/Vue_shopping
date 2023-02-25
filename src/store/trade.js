import {reqUseraddress,reqTradeCart} from '@/api';

const actions = {
    async getUserAddressInfo({commit}){
        let result = await reqUseraddress();
        if(result.code===200) {
            commit('USERADDRESS',result.data)
        }
        
    },
    async getOrderInfo({commit}){
        let result = await reqTradeCart();
        if(result.code===200) {
            commit('GETORDERINFO',result.data);
        }
    }
};

const mutations = {
    USERADDRESS(state,address) {
        state.address = address;
    },
    GETORDERINFO(state,orderInfo) {
        state.orderInfo = orderInfo;
    }
};

const state = {
    address : [],
    orderInfo: {}
};

const getters = {};

export default {
    actions,
    mutations,
    state,
    getters
}