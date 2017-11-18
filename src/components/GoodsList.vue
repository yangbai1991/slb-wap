<template>
  <div class="goods-list-wrap">
    <van-search placeholder="请输入商品名称" v-model="value" />
    <ul class="goods-list">
      <li class="goods">
        <router-link to="/detail" class="goods-link">
          <img class="goods-img" src="https://img.yzcdn.cn/upload_files/2017/04/21/Fkw9ajDiwZQTA5O9Y-EsV1rTyeEh.jpg?imageView2/2/w/520/h/0/q/75/format/jpg">
          <div class="goods-info">
            <p class="goods-title">IF设计大奖 | 王菲同款 丹麦PO:倒立泡茶便携保温杯 彩色限量款火热抢购中</p>
            <p class="goods-sub-title c-black hide"></p>
            <p class="goods-price">
              <em>¥ 248.00</em>
            </p>
          </div>
        </router-link>
      </li>
      <li class="goods">
        <router-link to="/detail" class="goods-link">
          <img class="goods-img" src="https://img.yzcdn.cn/upload_files/2017/02/27/FjSFmuZSDrh9h2FpK_on1VQ_U72P.jpg?imageView2/2/w/520/h/0/q/75/format/jpg">
          <div class="goods-info">
            <p class="goods-title">六鑫珠宝  8-9mm近圆强光天淡水珍珠项链</p>
            <p class="goods-sub-title c-black hide"></p>
            <p class="goods-price">
              <em>¥ 248.00</em>
            </p>
          </div>
        </router-link>
      </li>
      <li class="goods">
        <router-link to="/detail" class="goods-link">
          <img class="goods-img" src="https://img.yzcdn.cn/upload_files/2017/03/12/148928498535722095.gif?imageView2/2/w/520/h/0/q/75/format/gif">
          <div class="goods-info">
            <p class="goods-title">【塔泽】玫瑰花冠-大瓶包邮</p>
            <p class="goods-sub-title c-black hide"></p>
            <p class="goods-price">
              <em>¥ 248.00</em>
            </p>
          </div>
        </router-link>
      </li>
      <li class="goods">
        <router-link to="/detail" class="goods-link">
          <img class="goods-img" src="https://img.yzcdn.cn/upload_files/2017/10/13/FuAnOcTijZ7_pQtq9mVeUx8KdkW6.png?imageView2/2/w/520/h/0/q/75/format/jpg">
          <div class="goods-info">
            <p class="goods-title">爱柒粥丨七种口味变着花样让你吃 每天一种 健康 便捷（分）</p>
            <p class="goods-sub-title c-black hide"></p>
            <p class="goods-price">
              <em>¥ 248.00</em>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="btn-area">
      <van-button size="large">进店逛逛</van-button>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'GoodsList',
    data () {
      return {
        value: ''
      };
    },
    methods: {
    }
  };
</script>

<style lang="scss" scope>
  .goods-list-wrap {
    background: #f8f8f8;
    padding-top: 42px;
    .van-search {
      position: fixed;
      top:0;
      right: 0;
      left: 0;
      z-index: 1988;
    }
  }
  .btn-area {
    padding: 0 15px;
    margin-top: 10px;
  }
  .goods-list {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    .goods {
      width: 50%;
      margin: 4px 0;
      .goods-link {
        display: block;
        margin: 0 4px;
        background: #fff;
      }
      .goods-img {
        width: 100%;
      }
      .goods-info {
        font-size: 14px;
        padding-left: 6px;
        margin-top: 10px;
      }
      .goods-title {
        color: #333;
        height: 36px;
        overflow: hidden;
        word-break: break-word;
      }
      .goods-price {
        color: #f44;
        font-size: 16px;
        padding: 5px 10px 10px 0;
        em {
          font-style: normal;
        }
      }
    }
  }
</style>