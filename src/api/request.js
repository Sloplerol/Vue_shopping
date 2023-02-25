//对axios进行二次封装
import axios from 'axios';
//引入进度条
import nProgress from 'nprogress';

import "nprogress/nprogress.css";

import store from '@/store';

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,

})
//请求拦截器
requests.interceptors.request.use((config)=>{
    nProgress.start();

    if(store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token; 
    }
    //当登陆请求后需要将token放入到头信息中来验证用户是否登陆成功
    if(store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data
},(err)=>{
    console.log(err.message);
})

export default requests;