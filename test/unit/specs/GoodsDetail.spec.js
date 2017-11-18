import Vue from 'vue';
import GoodsDetail from '@/components/GoodsDetail';

describe('GoodsDetail.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(GoodsDetail);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App');
  });
});
