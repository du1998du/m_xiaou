<template>
  <div class="container">
    <div class="header">
      <go-back></go-back>
      <div class="title">商品详情</div>
      <div class="iconfont icon-19 more"></div>
    </div>
    <div class="content">
      <img :src="$imgUrl+goodsinfo.img" alt="" />
      <div class="goods-info">
        <p class="name">{{goodsinfo.goodsname}}</p>
        <p class="price">
          <span>&yen;{{goodsinfo.price}}</span>
          <span>(此价格不与套装优惠同时享受)</span>
        </p>
      </div>
    </div>
    <div class="goods-buy">
      <div class="row">
        <div class="left">
          <p>
            促销：
            <span>满 减</span>
            满2件9折；3件8折
          </p>
        </div>
        <div class="right"></div>
      </div>
      <div class="row">
        <div class="left">
          <p>购买数量</p>
        </div>
        <div class="right">
          <!-- <button @click="red">-</button>
          <input type="text" :value="num" />
          <button @click="add">+</button> -->
          <van-stepper v-model="num" />
        </div>
      </div>
      <div class="row">
        <div class="left">
          <p>商品属性</p>
        </div>
        <div class="right"></div>
      </div>
      <div class="choose">
        <p>{{goodsinfo.specsname}}</p>
        <div class="big" v-for="item in specsArr" :key="item">{{item}}</div>
      </div>
    </div>
    <div class="goods-detail">
      <div class="title">商品详情</div>
      <div v-html="goodsinfo.description" class="des"></div>
    </div>
    <div class="commend">
      <div class="tit">商品评价</div>
      <div class="commend-area">
        <p class="username">123456asds</p>
        <p class="cmd-cont">效果很好，物流很到位，下次继续</p>
        <div class="img">
        </div>
        <p class="date">2020-08-08</p>
        <div class="total-count">
          <p>共1000+条评论</p>
          <p>查看更多&gt;</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="cart">
        <div></div>
        <p>购物车</p>
        <span>3</span>
      </div>
      <!-- <div class="join-cart"></div>
            <div class="buy"></div> -->
      <div>
        <button class="join-cart" @click="goCart">加入购物车</button>
      </div>
      <div>
        <button class="buy">立即购买</button>
      </div>
      <!-- <router-link to="/cart/shopcart" tag="div">
        <button class="join-cart" @click="goCart">加入购物车</button>
      </router-link> -->
      <!-- <router-link to="/cart/order">
        <button class="buy">立即购买</button>
      </router-link> -->
    </div>
  </div>
</template>
 
<script>
import {getGoodsInfo, getCartAdd} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      goodsinfo:'',
      specsArr:[],
      num:1
    };
  },
  mounted(){
    // console.log(this.$route.query.id);
    getGoodsInfo({
      id: this.$route.query.id
    }).then(res => {
      if(res.code == 200){
        this.goodsinfo = res.list[0];
        this.specsArr = this.goodsinfo.specsattr ?this.goodsinfo.specsattr.split(','):[] 
      }
    })
  },
  methods:{
    goCart(){
      // console.log(111);
      // console.log(this.goodsinfo.id);
      // console.log(this.num);
      if(sessionStorage.getItem('user')){
        getCartAdd({
          uid: JSON.parse(sessionStorage.getItem('user')).uid,
          goodsid: this.goodsinfo.id,
          num: this.num
        }).then(res => {
          if(res.code == 200){
            Toast.success(res.msg);
            this.$router.push({
              path:'/cart',
              query:{
               id:JSON.parse(sessionStorage.getItem('user')).uid
              }
            })
          }
        })
      }else{
        Toast.fail('你还未登录，请先登录')
        this.$router.push('/login')
      }
    }
  }
};
</script>
 
<style scoped>
body {
  background-color: #f1f1f1;
}
.container {
  width: 7.5rem;
  margin: 0 auto;
  padding-bottom: 1.15rem;
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
.container .header .arr {
  font-size: 0.4rem;
  margin-left: 0.3rem;
}
.container .header .title {
  font-size: 0.36rem;
}
.container .header .more {
  font-size: 0.5rem;
  margin-right: 0.3rem;
}
.container .content img {
  width: 7.5rem;
}
.container .content .goods-info {
  background-color: #fff;
  padding: 0.33rem 0.35rem;
}
.container .content .goods-info .name {
  font-size: 0.3rem;
  color: #333;
  line-height: 0.5rem;
}
.container .content .goods-info .price {
  margin-top: 0.25rem;
}
.container .content .goods-info .price span:nth-child(1) {
  font-size: 0.26rem;
  color: #e33a3a;
}
.container .content .goods-info .price span:nth-child(2) {
  color: #b5b5b5;
  font-size: 0.24rem;
}
.container .goods-buy {
  background-color: #fff;
  margin-top: 0.2rem;
  padding-bottom: 0.1rem;
}
.container .goods-buy .row {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
}
.container .goods-buy .row .left {
  font-size: 0.26rem;
  color: #454545;
  margin-left: 0.25rem;
}
.container .goods-buy .row .left span {
  display: inline-block;
  width: 0.65rem;
  height: 0.35rem;
  border: 1px solid #c45f55;
  border-radius: 0.05rem;
  vertical-align: middle;
  color: #c45f55;
  font-size: 0.22rem;
  text-align: center;
  line-height: 0.34rem;
  margin: 0 0.1rem;
}
.container .goods-buy .row .right {
  margin-right: 0.25rem;
  display: flex;
  border: 1px solid #000;
  border-radius: 5px;
}
.container .goods-buy .row .right button {
  width: 0.62rem;
  height: 0.6rem;
  font-size: 0.3rem;
}
.container .goods-buy .row .right input {
  width: 0.8rem;
  height: 0.6rem;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.62rem;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.container .goods-buy .row:nth-child(1) .right {
  border: none;
  width: 0.35rem;
  height: 0.21rem;
  background-image: url(../../assets/images/detail_images/arrow.jpg);
  background-size: 0.35rem 0.21rem;
  background-repeat: no-repeat;
}
.container .goods-buy .row:nth-child(3) .right {
  border: none;
  width: 0.35rem;
  height: 0.21rem;
  background-image: url(../../assets/images/detail_images/arrow.jpg);
  background-size: 0.35rem 0.21rem;
  background-repeat: no-repeat;
}
.container .goods-buy .row:nth-child(3) {
  border: none;
}
.container .goods-buy .choose {
  display: flex;
  align-items: center;
}
.container .goods-buy .choose p {
  font-size: 0.26rem;
  color: #b5b5b5;
  margin:0 0.25rem;
}
.container .goods-buy .choose div {
  line-height: 0.6rem;
  text-align: center;
  border-radius: 0.05rem;
  font-size: 0.24rem;
  color: #fff;
}
.container .goods-buy .choose .big {
  width: 1rem;
  height: 0.6rem;
  background-color: #e43b3d;
  margin-right:0.3rem;
}
.container .goods-buy .choose .small {
  width: 1.18rem;
  height: 0.6rem;
  background-color: #e1e1e2;
}
.container .goods-detail {
  width: 100%;
  background-color: #fff;
  margin-top: 0.2rem;
}
.container .goods-detail .title {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
  color: #868686;
  margin-left: 0.25rem;
}
.container .goods-detail img {
  width: 7.5rem;
}
.container .goods-detail .des{
  padding: 0.2rem;
}
.container .commend {
  margin-top: 0.2rem;
  background-color: #fff;
}
.container .commend .tit {
  width: 7.05rem;
  height: 0.94rem;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  line-height: 0.94rem;
  font-size: 0.3rem;
  color: #454545;
}
.container .commend .commend-area {
  width: 7.05rem;
  margin: 0 auto;
}
.container .commend .commend-area .username {
  font-size: 0.22rem;
  color: #656565;
  margin: 0.35rem 0;
}
.container .commend .commend-area .cmd-cont {
  font-size: 0.26rem;
  color: #454545;
  margin: 0.35rem 0;
}
.container .commend .commend-area .img {
  display: flex;
}
.container .commend .commend-area .img img {
  width: 1.54rem;
  height: 1.51rem;
  margin-right: 0.2rem;
}
.container .commend .commend-area .date {
  font-size: 0.2rem;
  color: #999;
  margin: 0.3rem 0;
}
.container .commend .commend-area .total-count {
  border-top: 1px solid #eee;
  height: 0.95rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.24rem;
  color: #999;
}
.container .footer {
  height: 1.15rem;
  border-top: 1px solid #eee;
  background-color: #fff;
  display: flex;
  position: fixed;
  bottom: 0;
}
.container .footer .cart {
  width: 1.72rem;
  height: 1.15rem;
  position: relative;
}
.container .footer .cart div {
  width: 0.56rem;
  height: 0.53rem;
  background-image: url(../../assets/images/public/icon_7.jpg);
  background-repeat: no-repeat;
  background-size: 0.56rem 0.53rem;
  margin: 0.2rem auto 0;
}
.container .footer .cart p {
  font-size: 0.18rem;
  color: #999;
  text-align: center;
  margin-top: 0.1rem;
}
.container .footer .cart span {
  display: inline-block;
  width: 0.24rem;
  height: 0.24rem;
  border-radius: 50%;
  background-color: #e53a3d;
  text-align: center;
  line-height: 0.24rem;
  color: #fff;
  font-size: 0.18rem;
  position: absolute;
  top: 0.15rem;
  right: 0.55rem;
}
.container .footer button {
  width: 2.9rem;
  height: 1.15rem;
  color: #fff;
  font-size: 0.3rem;
}
.container .footer .join-cart {
  background-color: #f26c10;
}
.container .footer .buy {
  background-color: #e43b3d;
}
</style>