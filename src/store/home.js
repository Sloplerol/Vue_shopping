import {reqCategoryList,reqGetBanner,reqGetFloor} from '@/api';

const actions = {
    async category({commit}){
        let result = await reqCategoryList();
        commit('CATEGORY',result.data);
    },
    async getList({commit}){
        let result = await  reqGetBanner();
        if (result.code === 200) {
            commit('GETLIST',result.data);
        }
    },
    async getFloor({commit}) {
        let result = await reqGetFloor();
        if(result.code===200) {
            commit('GETFLOOR',result.data);
        }
    }
    
};

const mutations = {
    CATEGORY(state,val){
        state.category = val;
    },
    GETLIST(state,val) {
        state.bannercategory = val;
    },
    GETFLOOR(state,val) {
        state.floorcategory = val
    }
};

const state = {
    // category起始值取决于服务返回数据的值
    category : [],
    bannercategory : [],
    floorcategory: []
};

const getters = {};


export default {
    actions,
    mutations,
    state,
    getters
}