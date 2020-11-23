<template>
  <div>
    <div class="footer">
      <div class="footer-menu">
        <router-link to="/home" tag="div" active-class="selt">
          <div class="iconfont icon-zhuye"></div>
          <p>首页</p>
        </router-link>
      </div>

      <div class="footer-menu">
        <router-link to="/cart" tag="div" active-class="selt">
          <div class="iconfont icon-gouwuche"></div>
          <p>购物车</p>
        </router-link>
      </div>

      <div class="footer-menu">
        <router-link to="/mine" tag="div" active-class="selt">
          <div class="iconfont icon-ziyuan"></div>
          <p>我的</p>
        </router-link>
      </div>
    </div>
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
.footer {
  width: 6.5rem;
  height: 1.2rem;
  border-top: 1px solid #f1f1f1;
  background-color: #fff;
  display: flex;
  padding: 0 0.5rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin: 0 auto;
}
 .footer .footer-menu {
  width: 1rem;
  height: 0.85rem;
  text-align: center;
  color: #868686;
}
 .footer .selt {
  color: #f60;
}
 .footer .footer-menu div {
  font-size: 0.5rem;
}
 .footer .footer-menu p {
  text-align: center;
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
</style>