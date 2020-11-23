<template>
  <div class="container">
    <div class="header">
      <go-back></go-back>
      <div class="title">购物车</div>
      <div class="iconfont icon-19 more"></div>
    </div>
    <div v-if="goodsList.length > 0 && user">
      <ul>
        <li v-for="(item, i) in goodsList" :key="item.id">
          <div
            :class="[item.check ? 'choose selt' : 'choose']"
            @click="select(i)"
          ></div>
          <div class="img">
            <img :src="$imgUrl + item.img" alt="" />
          </div>
          <div class="goods-info">
            <p>{{ item.goodsname }}</p>
            <!-- <p>规格： {{ item.weight }}</p> -->
            <p>&yen;{{ item.price }}</p>
          </div>
          <div class="count">
            <!-- <button @click="sub(i)">-</button>
          <input type="text" value="1" v-model="item.num" />
          <button @click="add(i)">+</button> -->
            <van-stepper v-model="num" />
          </div>
          <button class="del" @click="del(item.id)">删除</button>
        </li>
      </ul>
      <div class="total-price">
        <div class="select">
          <span @click="selectAll" :class="[isCheckAll ? 'selt' : '']"></span>
          全选
        </div>
        <div class="total">
          <p>
            总计：
            <span>{{ allPrice }}</span>
          </p>
          <p>不含运算，以优惠 &yen;0.00</p>
        </div>
        <router-link to="/cart/order">
          <div class="jiesuan">去结算(2件)</div>
        </router-link>
      </div>
    </div>
    <div v-else-if="goodsList.length = 0 && user">
      <van-empty description="购物车空空如也，快去买买买！！！" />
    </div>
    <div v-else>
       <van-empty description="您还未登录，请先登录！！！" />
       <router-link to="/login" tag="div" class="login">
        <button >请先登录</button>
       </router-link>
    </div>
    <f-nav></f-nav>
  </div>
</template>
 
<script>
import { getCartList, getCartDelete } from "../../util/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      isCheckAll: false,
      goodsList: [],
      num: 1,
      user: "",
    };
  },
  mounted() {
    this.getCartInfo();
  },
  methods: {
    // 控制全选
    selectAll() {
      this.isCheckAll = !this.isCheckAll;
      this.goodsList.map((item) => {
        item.check = this.isCheckAll;
      });
    },
    // 点击那一个商品， 将选择的状态置为相反的状态
    select(i) {
      this.goodsList[i].check = !this.goodsList[i].check;
    },
    // 封装购物车列表
    getCartInfo() {
      if (sessionStorage.getItem("user")) {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        getCartList({
          uid: this.$route.query.id ? this.$route.query.id : this.user.uid,
        }).then((res) => {
          if (res.code == 200) {
            this.goodsList = res.list;
            this.goodsList.map((item) => {
              item.check = true;
            });
            console.log(this.goodsList);
          } else {
            Toast.fail(res.msg);
          }
        });
      }
    },
    // 删除购物车
    del(id) {
      console.log(id);
      getCartDelete({ id }).then((res) => {
        if (res.code == 200) {
          Toast.success(res.msg);
          this.getCartInfo();
        } else {
          Toast.fail(res.msg);
        }
      });
    },
  },
  // 利用监听， 判断是否所有商品都被选择， 如果全部选择，则全选也是选中状态；只要有一个不选择，全选就不选择
  watch: {
    goodsList: {
      deep: true,
      handler() {
        this.isCheckAll = this.goodsList.every((item) => {
          return item.check;
        });
      },
    },
  },
  computed: {
    allPrice() {
      let sum = 0;
      this.goodsList.map((item) => {
        sum += item.num * item.price;
      });
      return sum.toFixed(2);
    },
  },
};
</script>
 
<style scoped>
.container {
  width: 7.5rem;
  height: 9.5rem;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 2rem;
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
  font-size: 0.3rem;
  margin-left: 0.2rem;
}
.container .header .title {
  font-size: 0.36rem;
}
.container .header .more {
  margin-right: 0.5rem;
  font-size: 0.4rem;
}
.container ul {
  width: 100%;
  background-color: #fff;
  padding-top: 0.25rem;
  overflow: hidden;
}
.container ul li {
  height: 1.75rem;
  display: flex;
  align-items: center;
  padding: 0 0.3rem 0 0.25rem;
  box-shadow: 0 0 0.1rem #ccc;
  margin-bottom: 0.3rem;
  position: relative;
}
.container ul li .choose {
  width: 0.33rem;
  height: 0.33rem;
  border-radius: 50%;
  border: 0.02rem solid #e5e5e5;
  margin-right: 0.35rem;
  background-repeat: no-repeat;
  background-size: 0.17rem 0.13rem;
  background-position: 0.08rem 0.11rem;
}
.container ul li .selt {
  border-color: #b22a19;
  background-image: url(../../assets/images/shoping_car_images/select.jpg);
}
.container ul li .img {
  width: 1.02rem;
  height: 0.82rem;
  margin-right: 0.35rem;
}
.container ul li .img img {
  width: 1.02rem;
  height: 0.82rem;
}
.container ul li .goods-info {
  width: 2rem;
  height: 100%;
}
.container ul li .goods-info p {
  font-size: 0.24rem;
  margin: 0.25rem 0;
}
.container ul li .goods-info p:nth-child(1) {
  font-size: 0.26rem;
  color: #333;
}
.container ul li .goods-info p:nth-child(2) {
  color: #666;
}
.container ul li .goods-info p:nth-child(3) {
  color: #e43b39;
}
.container ul li .count {
  width: 2.1rem;
  height: 0.57rem;
  color: #454545;
  font-size: 0.2rem;
  display: flex;
  /* margin-left: 0.6rem; */
  /* border: 1px solid #000; */
  border-radius: 5px;
}
.container ul li .count button {
  width: 0.64rem;
  height: 0.57rem;
}
.container ul li .count input {
  width: 0.81rem;
  height: 0.57rem;
  text-align: center;
  border-right: 1px solid #454545;
  border-left: 1px solid #454545;
}

.container ul li .del {
  width: 0.7rem;
  height: 1.75rem;
  background-color: #e43b3d;
  position: absolute;
  right: 0;
  /* display: none; */
  font-size: 0.24rem;
  text-align: center;
  line-height: 1.75rem;
  color: #fff;
}
/* .container ul li:nth-child(2) {
  margin-left: -1rem;
}
.container ul li:nth-child(2) .del {
  display: block; */
/* } */
.container .total-price {
  width: 7.5rem;
  background-color: #fff;
  height: 1.14rem;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 1.2rem;
}
.container .total-price .select {
  font-size: 0.24rem;
  color: #666;
  margin-left: 0.25rem;
}
.container .total-price .select span {
  display: inline-block;
  width: 0.33rem;
  height: 0.33rem;
  /* border: 0.02rem solid #b53928; */
  border-radius: 50%;
  vertical-align: middle;
  border: 0.02rem solid #e5e5e5;
  /* background-image: url(../../assets/images/shoping_car_images/select.jpg); */
  background-repeat: no-repeat;
  background-size: 0.17rem 0.13rem;
  background-position: 0.08rem 0.11rem;
  margin-right: 0.1rem;
}
.container .total-price .select span.selt {
  border: 0.02rem solid #b53928;
  background-image: url(../../assets/images/shoping_car_images/select.jpg);
}
.container .total-price .total {
  width: 2.7rem;
  height: 1.14rem;
  margin-left: 0.5rem;
}
.container .total-price .total p {
  text-align: right;
  margin: 0.2rem 0;
}
.container .total-price .total p:nth-child(1) {
  font-size: 0.3rem;
  color: #333;
}
.container .total-price .total p:nth-child(1) span {
  color: #e43b3d;
}
.container .total-price .total p:nth-child(2) {
  font-size: 0.2rem;
  color: #d5d5d5;
}
.container .total-price .jiesuan {
  width: 2.48rem;
  height: 1.14rem;
  background-color: #f26c10;
  font-size: 0.3rem;
  color: #fff;
  text-align: center;
  line-height: 1.14rem;
}
.container .total-price .jiesuan a {
  color: #fff;
}
.login{
  width: 5rem;
  margin: 0.3rem auto;
}
 .login button {
  width: 5rem;
  height: 0.8rem;
  background-color: #f26c10;
  color: #fff;
  font-size: 0.3rem;
  border-radius: 5px;
}
</style>