import {reqgetCode,reqcomRegister,reqLoginList,reqUserinfo,reqLogout} from '@/api';

const actions = {
    async getCodeMsg({commit},phone){
        let result = await reqgetCode(phone);
        if(result.code===200) {
            commit('GETCODE',result.data)
            return 'ok';
        }else {
            return Promise.reject(new Error('failure'));
        }
    },
    async userRegister({commit},user) {
        let result = await reqcomRegister(user)
        console.log(result);
        if(result.code===200) {
            return 'ok'
        }else {
            return Promise.reject(new Error(result.data));
        }
    },
    async userLogin({commit},data){
        let result = await reqLoginList(data);
        console.log(result);
        if(result.code == 200) {
            commit('USERTOKEN',result.data.token);
            //持久化存储token
            localStorage.setItem('token',result.data.token);
            return 'ok'
        }else {
            return Promise.reject(new Error('failure'));
        }
    },
    async userinfo({commit}) {
        let result = await reqUserinfo();
        if(result.code===200) {
            commit('USERINFO',result.data);
            return 'ok';
        }else {
            return Promise.reject(new Error('failure'));
        }
        
    },
    async userLogout({commit}){
        let result = await reqLogout();
        if(result.code===200) {
            commit('USERLOGOUT');
            return 'ok'
        }else {
            return Promise.reject(new Error('failure'))
        }
    }
    
};

const mutations = {
    GETCODE(state,code){
        state.code = code;
    },
    USERTOKEN(state,token) {
        state.token = token;
    },
    USERINFO(state,userinfo) {
        state.userinfo = userinfo;
    },
    USERLOGOUT(state){
        state.token = '';
        state.userinfo = {};
        localStorage.removeItem('token');
        
    }
};

const state = {
    code: '',
    token: localStorage.getItem('token'),
    userinfo: ''
};

const getters = {
};


export default {
    actions,
    mutations,
    state,
    getters
}