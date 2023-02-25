import Vue from 'vue';

import VueRouter from 'vue-router';

import store from '@/store';

Vue.use(VueRouter);
// 对push方法进行重写

import routes from '@/router/routes';

let orginPush = VueRouter.prototype.push;
let orginReplace = VueRouter.prototype.replace;


VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject) {
        orginPush.call(this,location,resolve,reject);
    }else {
        orginPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject) {
        orginReplace.call(this,location,resolve,reject);
    }else {
        orginReplace.call(this,location,()=>{},()=>{});
    }
}


let router = new VueRouter({
    routes,
    //滚动行为 控制滚动条处于最顶部
    scrollBehavior (to, from, savedPosition) {
        return { y: 0 }
      }
})

//全局路由首位
router.beforeEach(async (to,from,next)=>{
    let token = store.state.user.token;
    
    let name = store.state.user.userinfo.name;

    if(token) {
        if(to.path=='/login') {
            // 当跳转路由为登陆强制放行为home
            next('/');
        }else {
            if(name) {
                next()
            }else {
                try {
                    //当获取用户信息成功后放行
                    await store.dispatch('userinfo')
                    next();
                } catch (error) {
                    //当token过期后触发 清除token让用户重新登陆
                    
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    }else {
        let toPath = to.path;
        if(toPath.indexOf('/trade') !== -1 || toPath.indexOf('/pay') !== -1 || toPath.indexOf('/center') !== -1 ) {
            
            next('/login?redirect='+toPath)
        }else {
            next();
        }
    }
})

export default router;