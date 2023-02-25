import requests from './request';

import mockrequests from './mock';

//接口地址 /api/product/getBaseCategoryList get

export const reqCategoryList = ()=>{
    return requests({url: '/product/getBaseCategoryList',method: 'get'})
}

//通过banner接口获取到banner的数据
export const reqGetBanner = ()=> mockrequests.get('/banner');


export const reqGetFloor = ()=> mockrequests.get('/floor');

export const reqGetSearchInfo = (params)=>requests({url: '/list',method: 'post',data: params});

export const reqGoodsInfo = (skuId)=>requests({url: `/item/${skuId}`,method: 'get'});
// 购物车api /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqCardList = (skuId,skuNum)=>requests({url: `/cart/addToCart/${skuId}/${skuNum}`,method: 'post'})

export const reqShopCart = ()=>requests({url: '/cart/cartList',method: 'get'});

export const delShopCart = (skuId)=>requests({url: `/cart/deleteCart/${skuId}`,method: 'delete'});

export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url: `/cart/checkCart/${skuId}/${isChecked}`,method: 'get'})

export const reqgetCode = (phone)=>requests({url: `/user/passport/sendCode/${phone}`,method: 'get'});

export const reqcomRegister = (data)=>requests({url: '/user/passport/register',method: 'post',data});

export const reqLoginList = (data)=>requests({url: '/user/passport/login',data,method: 'post'});

export const reqUserinfo = ()=>requests({url: '/user/passport/auth/getUserInfo',method: 'get'});

export const reqLogout = ()=>requests({url: '/user/passport/logout',method: 'get'});

export const reqUseraddress = ()=>requests({url: '/user/userAddress/auth/findUserAddressList',method: 'get'});

export const reqTradeCart = ()=>requests({url: '/order/auth/trade',method: 'get'});
 
export const reqPayList = (tradeNo,data)=>requests({url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,method: 'post',data});

export const reqPayListById = (orderId)=>requests({url: `/payment/weixin/createNative/${orderId}`,method: 'get'})

export const reqPayStatus = (orderId)=>requests({url: `/payment/weixin/queryPayStatus/${orderId}`,method: 'get'});

export const reqMyMsg = (page,limit)=>requests({url: `/order/auth/${page}/${limit}`,method: 'get'})