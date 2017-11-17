<template>
  <van-sku
    v-model="showBase"
    :sku="sku"
    :goods="goods"
    :goodsId="goodsId"
    :hideStock="sku.hide_stock"
    :quota="quota"
    :quotaUsed="quotaUsed"
    :resetStepperOnHide="resetStepperOnHide"
    :disableStepperInput="disableStepperInput"
    @buy-clicked="handleBuyClicked"
    @add-cart="handleAddCartClicked"
  />
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showBase: true,
      sku: {
        tree: [
          { k: '颜色' }
        ]
      },
      goods: {},
      goodsId: null,
      quota: 0,
      quotaUsed: 0,
      resetStepperOnHide: true,
      disableStepperInput: true,
      handleBuyClicked: () => {},
      handleAddCartClicked: () => {}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
