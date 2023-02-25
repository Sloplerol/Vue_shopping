import Home from '@/pages/Home'
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import Addcart from '@/pages/AddCartSuccess';
import Shopcart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center';
import myOrder from '@/pages/Center/myOrder';
import groupOrder from '@/pages/Center/groupOrder';


export default [
    {
        path: '*',
        redirect: '/home',
        meta: {isshow: true}
    },
    {
        path: '/home',
        component: Home,
        meta: {isshow: true}
    },
    {
        path: '/login',
        component: Login,
        meta: {isshow: false}
    },
    {
        name: 'sousuo',
        path: '/search/:keyword?',
        // 路由懒加载只在跳转到该组件时才引入组件s
        component: ()=>import('@/pages/Search'),
        meta: {isshow: true},
        // 当props为布尔值时收到的都是params参数值
        // props: true
        //对象写法
        // props: {a:100,b:200},
        // 函数写法
        props: ($route)=>{
            return {keyword: $route.params.keyword,k: $route.query.k}
        }
        
        
    },
    {
        path: '/register',
        component: Register,
        meta: {isshow: false}
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        meta: {isshow: true}

    },
    {
        name: 'addcart',
        path: '/addcart',
        component: Addcart,
        meta: {isshow: true}
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: Shopcart,
        meta: {isshow: true}
    },
    {
        path: '/trade',
        component: Trade,
        meta: {isshow: true},
        beforeEnter: (to, from, next) => {
            let fromPath = from.path;
            if(fromPath=='/shopcart') {
                next();
            }else {
                next(from.path);
            }
        }
    },
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        meta: {isshow: true},
        beforeEnter: (to, from, next) => {
            let fromPath = from.path;
            if(fromPath=='/trade') {
                next();
            }else {
                next(from.path);
            }
        }
    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: PaySuccess,
        meta: {isshow: true},
    },
    {
        name: 'center',
        path: '/center',
        component: Center,
        meta: {isshow: true},
        children: [
            {
                path: '/center',
                redirect: '/center/myorder'
            },
            {
                path: 'myorder',
                component: myOrder
            },
            {
                path: 'grouporder',
                component: groupOrder
            }
        ]

    }
]