import Vue from 'vue';
import Router from 'vue-router';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);
Vue.use(Vant);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
