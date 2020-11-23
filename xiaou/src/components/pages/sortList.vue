<template>
  <div class="container">
    <div class="header">
      <go-back></go-back>
      <div class="title">
        <img src="../../assets/images/list_images/logo.jpg" alt="" />
      </div>
      <div class="iconfont icon-19 more"></div>
    </div>
    <div class="search">
      <span></span>
      <input type="text" placeholder="搜索商品" />
    </div>
    <div class="goods-list">
      <ul>
        <li v-for="item in goodsList" :key="item.id">
          <router-link :to="'/detail?id='+item.id" class="li-cont">
            <img :src="$imgUrl+item.img" alt="" />
            <div class="goods-info">
              <p class="name">
                {{item.goodsname}}
              </p>
              <p class="price">
                <span>&yen;</span>
                {{item.price}}
              </p>
              <p class="commend">3625条评论</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <f-nav></f-nav>
  </div>
</template>
 
<script>
import {getCateGoods} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      goodsList:[]
    };
  },
  mounted(){
    // console.log(this.$route.query.id);
    getCateGoods({
      fid: this.$route.query.id
    }).then(res => {
      // console.log(res);
      if(res.code == 200){
        this.goodsList = res.list;
      }else{
        Toast(res.msg)
      }
    })
  }
};
</script>
 
<style scoped>
.container {
  width: 7.5rem;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 1rem;
}
.container .header {
  width: 7.5rem;
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
}

.container .header .arr img {
  width: 0.17rem;
  height: 0.29rem;
}
.container .header .title {
  font-size: 0.36rem;
}
.container .header .title img {
  width: 1.5rem;
  height: 0.31rem;
}
.container .header .more {
  margin-right: 0.3rem;
}
.container .header .more span {
  font-size: 0.5rem;
}
.container .search {
  width: 6.25rem;
  height: 0.78rem;
  background-color: #f26c10;
  margin: 0 auto;
  border-radius: 0.5rem;
  margin-top: 0.2rem;
  line-height: 0.78rem;
  text-align: center;
}
.container .search span {
  display: inline-block;
  width: 0.29rem;
  height: 0.29rem;
  background-image: url(../../assets/images/list_images/search.jpg);
  background-repeat: no-repeat;
  background-size: 0.29rem 0.29rem;
  vertical-align: middle;
  margin-right: 0.2rem;
}
.container .search input {
  width: 2rem;
  height: 0.29rem;
  font-size: 0.24rem;
  color: #fff;
}
.container .search input::-webkit-input-placeholder {
  color: #fff;
}
.container .goods-list ul {
  width: 7.05rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 1.4rem;
}
.container .goods-list ul li {
  height: 2rem;
  display: flex;
  border-bottom: 1px solid #d1d1d1;
}
.container .goods-list ul li .li-cont{
  display: flex;
}
.container .goods-list ul li img {
  width: 1.47rem;
  height: 1.6rem;
  margin: 0.28rem 0 0 0.2rem;
}
.container .goods-list ul li .goods-info {
  width: 4.85rem;
  height: 2rem;
  margin-left: 0.4rem;
}
.container .goods-list ul li .goods-info p {
  font-size: 0.26rem;
}
.container .goods-list ul li .goods-info .name {
  margin-top: 0.28rem;
  color: #333;
}
.container .goods-list ul li .goods-info .price {
  color: #e43b3d;
  margin: 0.22rem 0;
}
.container .goods-list ul li .goods-info .price span {
  font-size: 0.22rem;
}
.container .goods-list ul li .goods-info .commend {
  color: #999;
}
</style>