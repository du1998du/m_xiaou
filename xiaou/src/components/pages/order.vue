<template>
  <div class="container">
    <div class="header">
      <go-back></go-back>
      <div class="title">确认订单</div>
      <div class="iconfont icon-19 more"></div>
    </div>
    <div class="user">
      <div class="address">
        <p>
          <span>收货人：xiaoU</span>
          <span>12345678901</span>
        </p>
        <p>收货地址：北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</p>
      </div>
      <div class="arr"></div>
    </div>
    <div class="goods">
      <div class="goods-info">
        <div class="left">
          <img src="../../assets/images/order/shop.jpg" alt="" />
          <div class="name">
            <p>雅诗兰黛护肤霜</p>
            <p>规格 : 50g</p>
          </div>
        </div>
        <div class="right">
          <span>&yen;</span>
          123.00
        </div>
      </div>
      <div class="goods-count">
        <p>购买数量：</p>
        <div class="count">
          <button>-</button>
          <input type="text" value="1" />
          <button>+</button>
        </div>
      </div>
      <div class="express">
        <p>配送方式</p>
        <P>xx快递</P>
      </div>
    </div>
    <div class="discount">
      <div class="top">
        <p>优惠券</p>
        <p>无可用</p>
      </div>
      <div class="bottom">
        <p>使用积分</p>
        <div class="right">
          <input type="text" placeholder="输入积分" />
          <button>使用</button>
          <p>可用<span>50</span>积分</p>
        </div>
      </div>
    </div>
    <div class="price-box">
      <ul>
        <li>商品金额<span>&yen;68.00</span></li>
        <li>运费<span>+ &yen;0.00</span></li>
        <li>优惠券<span>- &yen;0.00</span></li>
        <li>会员优惠<span>- &yen;0.00</span></li>
        <li>积分抵扣 <span>- &yen;0.00</span></li>
      </ul>
    </div>
    <p class="price">实付金额：<span>&yen;68.00</span></p>
    <div class="submit">
      <button>提交订单</button>
    </div>
    <f-nav></f-nav>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
};
</script>
 
<style scoped>
.container {
  width: 7.5rem;
  margin: 0 auto;
  padding-bottom: 1.1rem;
}
.container .header {
  width: 7.5rem;
  height: 0.88rem;
  background-color: #f26c10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.container .header .title {
  font-size: 0.36rem;
}
.container .header .more {
  font-size: 0.5rem;
  margin-right: 0.3rem;
}
.container .user {
  background-color: #fff;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container .user .address {
  width: 6.4rem;
}
.container .user .address p {
  font-size: 0.24rem;
  color: #666;
  margin: 0.23rem 0;
}
.container .user .address p:nth-child(1) {
  display: flex;
  justify-content: space-between;
}
.container .user .arr {
  width: 0.2rem;
  height: 0.26rem;
  background-image: url(../../assets/images/order/arrow.jpg);
  background-repeat: no-repeat;
  background-size: 0.2rem 0.26rem;
}
.container .goods {
  background-color: #fff;
  margin: 0.15rem 0;
  padding: 0.2rem 0 0 0;
}
.container .goods .goods-info {
  width: 7.05rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container .goods .goods-info .left {
  display: flex;
  margin-left: 0.1rem;
}
.container .goods .goods-info .left img {
  width: 1.08rem;
  height: 1.1rem;
}
.container .goods .goods-info .left .name {
  margin-left: 0.3rem;
}
.container .goods .goods-info .left .name p {
  font-size: 0.26rem;
  color: #666;
  margin: 0.1rem 0;
}
.container .goods .goods-info .left .name p:nth-child(2) {
  color: #b2b2b2;
  margin-top: 0.2rem;
}
.container .goods .goods-info .right {
  margin-right: 0.1rem;
  font-size: 0.3rem;
  color: #e43b3d;
}
.container .goods .goods-count {
  width: 7.05rem;
  margin: 0 auto;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
}
.container .goods .goods-count p {
  font-size: 0.24rem;
  color: #666;
}
.container .goods .goods-count .count {
  font-size: 0.3rem;
  display: flex;
}
.container .goods .goods-count .count button {
  width: 0.73rem;
  height: 0.62rem;
  border: 1px solid #000;
  border-radius: 5px;
  line-height: 0.62rem;
}
.container .goods .goods-count .count input {
  width: 1rem;
  height: 0.6rem;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  margin: 0 0.05rem;
}
.container .goods .express {
  width: 7.05rem;
  height: 0.98rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.24rem;
}
.container .discount {
  background-color: #fff;
}
.container .discount .top {
  font-size: 0.24rem;
  color: #666;
  padding: 0 0.2rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}
.container .discount .bottom {
  padding: 0 0.2rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container .discount .bottom p {
  font-size: 0.24rem;
  color: #666;
}
.container .discount .bottom .right {
  display: flex;
  align-items: center;
}
.container .discount .bottom .right input {
  width: 1.5rem;
  height: 0.71rem;
  border: 2px solid #f1f1f1;
  border-radius: 5px;
  text-align: center;
  color: #666;
  font-size: 0.2rem;
}
.container .discount .bottom .right button {
  width: 0.75rem;
  height: 0.75rem;
  background-color: #f26c10;
  color: #fff;
  text-align: center;
  line-height: 0.75rem;
  border-radius: 5px;
  margin: 0 0.2rem;
  font-size: 0.2rem;
}
.container .discount .bottom .right span {
  color: #e43b3d;
}
.container .price-box {
  margin-top: 0.1rem;
  background-color: #fff;
  padding: 0 0.2rem;
  border-bottom: 1px solid #f1f1f1;
}
.container .price-box ul {
  width: 7.05rem;
  margin: 0 auto;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.1rem 0 0 0;
}
.container .price-box ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.24rem;
  color: #666;
  margin: 0.2rem 0;
}
.container .price-box ul li span {
  font-size: 0.2rem;
  color: #e43b3d;
}
.container .price {
  padding: 0.45rem 0;
  font-size: 0.35rem;
  color: #666;
  background-color: #fff;
  text-align: right;
  padding-right: 0.3rem;
}
.container .price span {
  font-size: 0.3rem;
  color: #e43b3d;
}
.container .submit {
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-bottom: 0.3rem;
}
.container .submit button {
  width: 3.56rem;
  height: 1.13rem;
  background-color: #f26c10;
  font-size: 0.3rem;
  color: #fff;
  border-radius: 5px;
}
</style>