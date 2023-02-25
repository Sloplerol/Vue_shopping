import {reqShopCart,delShopCart,reqUpdateCheckedById} from '@/api';

const actions = {
    async getShopList({commit}){
        let result = await reqShopCart();
        if(result.code===200) {
            commit('GETSHOPLIST',result.data);
        }
    },
    async delShopListById({commit},skuId) {
        let result = await delShopCart(skuId);
        if(result.code==200) {
           return 'Ok' 
        }else {
            return Promise.reject(new Error('failure'))
        }
    },
    async updateChecked({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked);
        if(result.code==200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('failure'));
        }
    },
    DeleteAllChecked({dispatch,getters}){
        let PromiseAll = [];
        getters.cardList.cartInfoList.forEach(item=>{
            let promise = item.isChecked===1 ? dispatch('delShopListById',item.skuId) : '';
            // 把每一次返回的promise结果都存到PromiseAll里
            PromiseAll.push(promise);
        })
        return Promise.all(PromiseAll);
    },
    allChecked({dispatch,state},isChecked){
        let PromiseAll = [];
        state.cardList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateChecked',{skuId: item.skuId,isChecked})
            PromiseAll.push(promise);
        })
        return Promise.all(PromiseAll);
        
    }

};

const mutations =  {
    GETSHOPLIST(state,cardList){
        state.cardList = cardList
    }
};

const state = {
    cardList : []
};

const getters = {
    cardList(state){
        return state.cardList[0] || {};
    }
};

export default {
    actions,
    mutations,
    state,
    getters
}