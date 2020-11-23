<template>
  <div class="container">
    <div class="header">
      <img src="../../assets/images/index_images/logo.jpg" alt="" />
      <div class="input">
        <input type="text" placeholder="寻找物品" />
      </div>
      <div class="more">
        <span class="iconfont icon-19"></span>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>
          <span>推荐</span>
          <div class="border"></div>
        </li>

        <li>
          <span>女装</span>
          <div class="border"></div>
        </li>
        <li>
          <span>鞋包</span>
          <div class="border"></div>
        </li>
        <li>
          <span>居家</span>
          <div class="border"></div>
        </li>
        <li>
          <span>母婴儿童</span>
          <div class="border"></div>
        </li>
        <li>
          <span>美食</span>
          <div class="border"></div>
        </li>
        <li>
          <span>果蔬</span>
          <div class="border"></div>
        </li>
      </ul>
      <div class="more"></div>
    </div>
    <div class="banner">
      <!-- <img src="../../assets/images/index_images/banner.jpg" alt="" /> -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerList" :key="item.id">
          <img :src="$imgUrl + item.img" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="menu">
      <div class="box">
        <img src="../../assets/images/index_images/icon_1.jpg" alt="" />
        <p>限时抢购</p>
      </div>
      <div class="box">
        <img src="../../assets/images/index_images/icon_2.jpg" alt="" />
        <p>积分商城</p>
      </div>
      <div class="box">
        <img src="../../assets/images/index_images/icon_3.jpg" alt="" />
        <p>联系我们</p>
      </div>
      <div class="box">
        <router-link to="/sort" tag="div">
          <img src="../../assets/images/index_images/icon_4.jpg" alt="" />
          <p>商品分类</p>
        </router-link>
      </div>
    </div>
    <div class="first-content">
      <div class="seckill">
        <div class="title">
          <div></div>
          <span>限时秒杀</span>
        </div>
        <p>每天零点场 好货秒不停</p>
        <div class="countdown">
          <div class="time">
            <span>02</span>
            :
            <span>02</span>
            :
            <span>00</span>
          </div>
          <div class="ms">秒杀</div>
        </div>
        <img src="../../assets/images/index_images/shop_5.jpg" alt="" />
        <div class="price">
          <span>&yen;</span>
          14.8
        </div>
      </div>
      <div class="new">
        <div class="top-cont">
          <div class="info">
            <div class="brand">
              品牌上新
              <div class="discount">折</div>
            </div>
            <p>每日9点 抢大牌</p>
            <img src="../../assets/images/index_images/brand.jpg" alt="" />
          </div>
          <img src="../../assets/images/index_images/shop_1.jpg" alt="" />
        </div>
        <div class="bottom-cont">
          <div class="show">
            <p class="title">每日十件</p>
            <p class="desc">只为你选好货</p>
            <img src="../../assets/images/index_images/shop_2.jpg" alt="" />
          </div>
          <div class="show">
            <p class="title">拼啊</p>
            <p class="desc">超级好价拼图</p>
            <img src="../../assets/images/index_images/shop_3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="img-banner">
      <img src="../../assets/images/index_images/bar.jpg" alt="" />
    </div>
    <div class="goods-content">
      <div class="goods-sort">
        <p
          v-for="(item, index) in listTitle"
          :key="item.id"
          :class="[index == num ? 'on' : '']"
          @click="change(index)"
        >
          {{ item.title }}
        </p>
      </div>
      <ul v-show="num == 0">
        <li v-for="item in hotList" :key="item.id">
          <router-link :to="'/detail?id='+item.id" tag="div" class="li-cont">
            <img :src="$imgUrl+item.img" alt="" />
            <div class="goods-info">
              <p class="name">{{ item.goodsname }}</p>
              <p class="price"><span>&yen;</span>{{ item.price }}</p>
              <p class="count">已售222件</p>
              <button>立即抢购</button>
            </div>
          </router-link>
        </li>
      </ul>
      <ul v-show="num == 1">
        <li v-for="item in newList" :key="item.id">
          <router-link to="/detail" tag="div" class="li-cont">
            <img :src="$imgUrl+item.img" alt="" />
            <div class="goods-info">
              <p class="name">{{ item.goodsname }}</p>
              <p class="price"><span>&yen;</span>{{ item.price }}</p>
              <p class="count">已售222件</p>
              <button>立即抢购</button>
            </div>
          </router-link>
        </li>
      </ul>
      <ul v-show="num == 2">
        <li v-for="item in allList" :key="item.id">
          <router-link to="/detail" tag="div" class="li-cont">
            <img :src="$imgUrl+item.img" alt="" />
            <div class="goods-info">
              <p class="name">{{ item.goodsname }}</p>
              <p class="price"><span>&yen;</span>{{ item.price }}</p>
              <p class="count">已售222件</p>
              <button>立即抢购</button>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <f-nav />
  </div>
</template>
 
<script>
import { getBanner,getIndexGoods } from "../../util/axios";
import axios from 'axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      num: 0,
      bannerList: [],
      hotList:[],
      allList:[],
      newList:[],
      listTitle: [
        {
          id: 1,
          title: "热门推荐",
        },
        {
          id: 2,
          title: "发现新品",
        },
        {
          id: 3,
          title: "全部商品",
        },
      ],
      goodsList: [
        {
          id: 1,
          goodsNmae: "雅诗兰黛染发膏60ml",
          goodsPrice: "123.00",
          img_url: require("../../assets/images/index_images/shop_4.jpg"),
          sale: "888",
        },
        {
          id: 2,
          goodsNmae: "雅诗兰黛染发膏60ml",
          goodsPrice: "123.00",
          img_url: require("../../assets/images/index_images/shop_4.jpg"),
          sale: "888",
        },
        {
          id: 3,
          goodsNmae: "雅诗兰黛染发膏60ml",
          goodsPrice: "123.00",
          img_url: require("../../assets/images/index_images/shop_4.jpg"),
          sale: "888",
        },
      ],
    };
  },
  mounted() {
    axios.all([getBanner(),getIndexGoods()]).then(
      axios.spread((getBannerRes, getGoodsRes) => {
          // console.log(getBannerRes);
        if(getBannerRes.code == 200){
          this.bannerList = getBannerRes.list
        }else{
          Toast.fail(res.msg)
        }

        if(getGoodsRes.code == 200){
          this.newList = getGoodsRes.list[1].content,
          this.hotList = getGoodsRes.list[0].content,
          this.allList = getGoodsRes.list[2].content
        }else{
          Toast.fail(res.msg)
        }
      })
    )
  },
  methods: {
    change(n) {
      this.num = n;
    },
  },
};
</script>
 
<style scoped>
.header {
  width: 7.5rem;
  height: 0.88rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #e4e4e4;
}
.header img {
  width: 1.47rem;
  height: 0.33rem;
}
.header input {
  width: 3.05rem;
  height: 0.4rem;
  background-color: #eee;
  color: #bfbfbf;
  border-radius: 0.05rem;
  text-align: center;
}
.header input::-webkit-input-placeholder {
  color: #bfbfbf;
  font-size: 0.16rem;
}
.header .more span {
  font-size: 0.5rem;
}
.nav {
  width: 7.5rem;
  height: 0.76rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: relative;
}
.nav ul {
  display: flex;
  justify-content: space-around;
}
.nav ul li {
  font-size: 0.28rem;
  color: #333;
  height: 0.76rem;
  line-height: 0.76rem;
  padding: 0 0.2rem;
  position: relative;
}
.nav ul li span {
  display: inline-block;
  height: 0.74rem;
}
.nav ul li .border {
  width: 1px;
  height: 0.35rem;
  background-color: #fff;
  position: absolute;
  top: 0.25rem;
  right: 0;
}
.nav ul li:first-child {
  color: #ff0040;
}
.nav ul li:first-child span {
  border-bottom: 2px solid #ff0040;
}
.nav ul li:first-child .border {
  background-color: #f1f1f1;
}
.nav ul li:hover span {
  color: #ff0040;
  border-bottom: 2px solid #ff0040;
  cursor: pointer;
}
.nav .more {
  width: 0.75rem;
  height: 0.76rem;
  background: #fff;
  background-image: url(../../assets/images/index_images/arrow.jpg);
  background-repeat: no-repeat;
  background-position: 0.2rem 0.27rem;
  background-size: 0.35rem 0.21rem;
  position: absolute;
  right: 0;
}
.banner {
  width: 7.5rem;
  height: 2.9rem;
}
.my-swipe{
  height: 2.9rem;
}
.banner img {
  width: 7.5rem;
  height: 2.9rem;
}
.menu {
  width: 7.5rem;
  height: 1.8rem;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.menu .box {
  width: 1.5rem;
  height: 1.5rem;
}
.menu .box img {
  width: 0.64rem;
  height: 0.62rem;
  margin: 0.2rem auto;
}
.menu .box p {
  text-align: center;
  font-size: 0.28rem;
  color: #666;
}
.first-content {
  display: flex;
  margin-top: 0.3rem;
  background-color: #fff;
}
.first-content .seckill {
  width: 3.62rem;
  height: 3.6rem;
  padding: 0.2rem 0 0 0.15rem;
  border-right: 1px solid #f1f1f1;
  position: relative;
}
.first-content .seckill .title {
  width: 1.75rem;
  height: 0.35rem;
  font-size: 0.28rem;
  color: #f13060;
  display: flex;
}
.first-content .seckill .title div:nth-child(1) {
  display: inline-block;
  width: 0.35rem;
  height: 0.35rem;
  background-color: #fff;
  background-image: url(../../assets/images/index_images/timer.jpg);
  background-repeat: no-repeat;
  vertical-align: middle;
  background-size: 0.33rem 0.31rem;
}
.first-content .seckill p {
  color: #858585;
  font-size: 0.21rem;
  margin: 0.02rem 0 0.1rem;
}
.first-content .seckill .countdown {
  height: 0.42rem;
  font-size: 0.2rem;
  display: flex;
}
.first-content .seckill .countdown span {
  display: inline-block;
  width: 0.42rem;
  height: 0.42rem;
  background-color: #222;
  vertical-align: middle;
  border-radius: 5px;
  line-height: 0.42rem;
  text-align: center;
  color: #fff;
}
.first-content .seckill .countdown .ms {
  width: 0.96rem;
  height: 0.4rem;
  margin-left: 0.25rem;
  background-image: url(../../assets/images/index_images/bg.jpg);
  background-repeat: no-repeat;
  background-size: 0.96rem 0.4rem;
  line-height: 0.4rem;
  font-size: 0.27rem;
  text-align: center;
}
.first-content .seckill img {
  width: 2.36rem;
  height: 2rem;
  margin: 0.25rem 0.3rem;
}
.first-content .seckill .price {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background-color: #fe3278;
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  font-size: 0.26rem;
  color: #fff;
  line-height: 0.85rem;
  text-align: center;
}
.first-content .seckill .price span {
  font-size: 0.2rem;
  margin-right: -0.05rem;
}
.first-content .new {
  width: 3.72rem;
  height: 3.8rem;
}
.first-content .new .top-cont {
  width: 100%;
  height: 1.88rem;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
}
.first-content .new .top-cont .info {
  margin: 0.2rem 0 0 0.2rem;
}
.first-content .new .top-cont .info .brand {
  font-size: 0.28rem;
  color: #f13060;
  display: flex;
}
.first-content .new .top-cont .info .brand .discount {
  width: 0.35rem;
  height: 0.25rem;
  background-image: linear-gradient(to right, #ff0753, #ff3999);
  color: #fff;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.25rem;
  margin-top: 0.02rem;
  margin-left: 0.15rem;
  border-radius: 0.02rem;
}
.first-content .new .top-cont .info p {
  font-size: 0.2rem;
  color: #858585;
  margin: 0.1rem 0;
}
.first-content .new .top-cont .info img {
  width: 0.93rem;
  height: 0.32rem;
  margin-top: 0.3rem;
}
.first-content .new .top-cont img {
  width: 1.28rem;
  height: 1.78rem;
  margin: 0.05rem 0.3rem;
}
.first-content .new .bottom-cont {
  height: 1.89rem;
  display: flex;
}
.first-content .new .bottom-cont .show {
  width: 1.88rem;
}
.first-content .new .bottom-cont .show:nth-child(1) {
  border-right: 1px solid #f1f1f1;
}
.first-content .new .bottom-cont .show:nth-child(1) img {
  width: 0.64rem;
  height: 1.02rem;
}
.first-content .new .bottom-cont .show:nth-child(2) img {
  width: 1.04rem;
  height: 0.88rem;
  margin-top: 0.15rem;
}
.first-content .new .bottom-cont .title {
  font-size: 0.28rem;
  color: #f13060;
  margin: 0.2rem 0 0 0.2rem;
}
.first-content .new .bottom-cont .desc {
  font-size: 0.22rem;
  color: #858585;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}
.first-content .new .bottom-cont img {
  margin: 0.05rem auto 0;
}
.img-banner img {
  width: 7.5rem;
  height: 1.87rem;
  margin: 0.3rem 0;
}

.goods-content {
  background-color: #fff;
  overflow: hidden;
}

.goods-content .goods-sort {
  width: 7.1rem;
  height: 0.7rem;
  margin: 0.2rem auto;
  display: flex;
}
.goods-content .goods-sort p {
  width: 2.36rem;
  height: 0.68rem;
  border: 1px solid #ddd;
  line-height: 0.68rem;
  text-align: center;
  font-size: 0.3rem;
  color: #434343;
}
.goods-content .goods-sort p.on {
  color: #fff;
  background-color: #f26c10;
  border-color: #f26c10;
}

.goods-content ul {
  width: 7.1rem;
  margin: 0 auto;
}
.goods-content ul li {
  width: 7.05rem;
  height: 2.55rem;
  margin: 0 auto;
  padding-top: 0.45rem;
  box-shadow: 0 0 10px #ccc;
  margin-bottom: 0.35rem;
}
.goods-content ul li .li-cont {
  display: flex;
}
.goods-content ul li img {
  width: 2.16rem;
  height: 2.2rem;
  margin: 0 0.45rem 0 0.37rem;
}
.goods-content ul li .goods-info {
  font-size: 0.3rem;
  color: #333;
}
.goods-content ul li .price {
  font-size: 0.24rem;
  color: #ec3837;
  margin: 0.25rem 0;
}
.goods-content ul li .price span {
  font-size: 0.2rem;
}
.goods-content ul li .count {
  color: #9b9b9b;
  font-size: 0.24rem;
}
.goods-content ul li button {
  width: 1.65rem;
  height: 0.5rem;
  background-color: #f26c10;
  color: #fff;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 0.05rem;
  margin-top: 0.25rem;
  font-size: 0.24rem;
}
.container {
  padding-bottom: 1rem;
}
</style>