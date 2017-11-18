import Vue from 'vue';
import Router from 'vue-router';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import GoodsList from '@/components/GoodsList';
import GoodsDetail from '@/components/GoodsDetail';
import ShoppingCart from '@/components/ShoppingCart';
import UserCenter from '@/components/UserCenter';

Vue.use(Router);
Vue.use(Vant);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/detail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
});
