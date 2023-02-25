//对axios进行二次封装
import axios from 'axios';
//引入进度条
import nProgress from 'nprogress';

import "nprogress/nprogress.css";

const mockrequests = axios.create({
    baseURL: '/mock',
    timeout: 5000,

})

//请求拦截器
mockrequests.interceptors.request.use((config)=>{
    nProgress.start();
    return config;
})
// 响应拦截器
mockrequests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data
},(err)=>{
    console.log(err.message);
})

export default mockrequests;