<template>
  <div class="container">
    <div class="header">
      <!-- <div class="iconfont icon-fanhui arr"></div> -->
      <go-back></go-back>
      <div class="title">个人中心</div>
      <router-link to="/login" tag="div" class="more"> 登录 </router-link>
    </div>
    <div v-if="user">
      <div class="person-info">
        <div class="img">
          <img src="../../assets/images/mine_images/head.jpg" alt="" />
        </div>
        <div class="userinfo">
          <p class="username">{{user.nickname}}</p>
          <p class="level">v1</p>
        </div>
        <button>每日签到</button>
      </div>
      <div class="menu">
        <div class="menu-box">
          <div class="iconfont icon-quanbudingdan menu-icon"></div>
          <p>全部订单</p>
        </div>
        <div class="menu-box">
          <div class="iconfont icon-daifukuan menu-icon"></div>
          <p>待付款</p>
        </div>
        <div class="menu-box">
          <div class="iconfont icon-daishouhuo menu-icon"></div>
          <p>待收货</p>
        </div>
      </div>
      <ul>
        <li>
          <div class="left">
            <div class="iconfont icon-dizhi li-icon"></div>
            <p>地址管理</p>
          </div>
          <div class="right">
            <span></span>
          </div>
        </li>
        <li>
          <div class="left">
            <div class="iconfont icon-tuiguangzhuanqianxian li-icon"></div>
            <p>我的钱包</p>
          </div>
          <div class="right">
            200余额
            <span></span>
          </div>
        </li>
        <li>
          <div class="left">
            <div class="iconfont icon-youhuiquan_huaban li-icon"></div>
            <p>我的优惠券</p>
          </div>
          <div class="right">
            <span></span>
          </div>
        </li>
        <li>
          <div class="left">
            <div class="iconfont icon-ico li-icon"></div>
            <p>我的二维码</p>
          </div>
          <div class="right">
            <span></span>
          </div>
        </li>
        <li>
          <div class="left">
            <div class="iconfont icon-pengyou li-icon"></div>
            <p>我的小伙伴</p>
          </div>
          <div class="right">
            <span></span>
          </div>
        </li>
      </ul>
      <div class="exit">
        <button>退出登录</button>
      </div>
    </div>
    <div v-else>
      <div class="person-info">
        <div class="img">
          <img src="../../assets/images/mine_images/head.jpg" alt="" />
        </div>
        <div class="userinfo">
          <p class="username">未登录</p>
          <!-- <p class="level">v1</p> -->
        </div>
        <!-- <button>每日签到</button> -->
      </div>

      <router-link to="/login" class="exit" tag="div">
        <button>还未登录，快去登录</button>
      </router-link>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    this.user = sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : "";
  },
};
</script>
 
<style scoped>
.container {
  width: 7.5rem;
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
/* .container .header .arr {
  font-size: 0.3rem;
  margin-left: 0.3rem;
} */

.container .header .title {
  font-size: 0.36rem;
}
.container .header .more {
  font-size: 0.36rem;
  margin-right: 0.3rem;
}
.container .person-info {
  width: 100%;
  height: 2.05rem;
  background-color: #f26c10;
  display: flex;
  position: relative;
}
.container .person-info .img {
  width: 1.43rem;
  height: 1.43rem;
  border-radius: 50%;
  overflow: hidden;
  border: 0.05rem solid #fff;
  margin: 0.25rem 0 0 0.3rem;
}
.container .person-info .img img {
  width: 1.43rem;
  height: 1.43rem;
}
.container .person-info .userinfo {
  margin-left: 0.25rem;
}
.container .person-info .userinfo .username {
  font-size: 0.32rem;
  color: #fff;
  margin: 0.6rem 0 0.2rem;
}
.container .person-info .userinfo .level {
  font-size: 0.22rem;
  font-style: italic;
}
.container .person-info button {
  width: 1.6rem;
  height: 0.7rem;
  background-color: #fff;
  color: #f26c10;
  font-size: 0.28rem;
  border-radius: 0.05rem;
  position: absolute;
  right: 0.4rem;
  top: 50%;
  margin-top: -0.35rem;
}
.container .menu {
  background-color: #fff;
  width: 100%;
  height: 1.43rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.container .menu .menu-box {
  width: 1rem;
  height: 0.8rem;
  text-align: center;
}
.container .menu .menu-box .menu-icon {
  font-size: 0.5rem;
  color: #666;
}
.container .menu .menu-box p {
  font-size: 0.24rem;
  color: #666;
  margin-top: 0.2rem;
  text-align: center;
}
.container ul {
  background-color: #fff;
  margin-top: 0.2rem;
}
.container ul li {
  width: 100%;
  height: 1.18rem;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container ul li .left {
  margin-left: 0.35rem;
  display: flex;
  color: #666;
  align-items: center;
}
.container ul li .left .li-icon {
  font-size: 0.45rem;
  color: #f26c10;
}
.container ul li .left p {
  font-size: 0.26rem;
  /* color: #666; */
  line-height: 0.4rem;
  margin-left: 0.25rem;
}
.container ul li .right {
  color: #f26c10;
  margin-right: 0.35rem;
  display: flex;
  align-items: center;
}
.container ul li .right span {
  display: block;
  width: 0.26rem;
  height: 0.26rem;
  background-image: url(../../assets/images/public/right.jpg);
  background-repeat: no-repeat;
  background-size: 0.2rem 0.26rem;
  margin-left: 0.1rem;
  margin-top: -1px;
}
.container ul li:nth-child(3) img {
  width: 0.5rem;
}
.container .exit {
  width: 5rem;
  margin: 0.3rem auto;
}
.container .exit button {
  width: 5rem;
  height: 0.8rem;
  background-color: #f26c10;
  color: #fff;
  font-size: 0.3rem;
  border-radius: 5px;
}
</style>