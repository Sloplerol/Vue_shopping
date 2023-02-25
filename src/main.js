import Vue from 'vue'
import App from './App.vue'

//配置路由
import router from '@/router';

import TypeNav from '@/components/TypeNav'

import { Button, MessageBox } from 'element-ui';

Vue.component(Button.name, Button);

// elementUI注册时还可以挂在到vue原型对象身上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import store from '@/store'

import mock from '@/mock/mockServer';

import Pagination from '@/components/Pagination';

import "swiper/css/swiper.css";

import Carousel from '@/components/Carousel';

import VueLazyload from 'vue-lazyload'

// 注册全局组件第一个参数为组件名第二个参数是组件
Vue.component(TypeNav.name,TypeNav);

Vue.component(Carousel.name,Carousel);

Vue.component(Pagination.name,Pagination);

Vue.config.productionTip = false

const loadimage = require('@/assets/1.gif');

Vue.use(VueLazyload,{
  loading: loadimage
})
import "@/plugin/validate";

import * as API from '@/api';

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this,
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  // 注册仓库
  store,
  
}).$mount('#app')
