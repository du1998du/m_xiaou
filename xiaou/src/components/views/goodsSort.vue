<template>
  <div class="container">
    <div class="header">
      <go-back></go-back>
      <div class="title">商品分类</div>
      <div class="iconfont icon-19more"></div>
    </div>
    <div class="goods-sort">
      <div class="sort-list">
        <ul>
          <li
            v-for="(item, index) in sortList"
            :key="item.id"
            :class="index == num ? 'on' : ''"
            @click="change(index)"
          >
            {{ item.catename }}
            <div :class="index == num ? 'border cur' : 'border'"></div>
          </li>
        </ul>
      </div>
      <div class="sort-content">
        <ul>
          <li v-for="item in secondList" :key="item.id">
            <router-link :to="'/home/sortList?id='+item.id">
              <img :src="$imgUrl+item.img" alt="" />
              <p>{{ item.catename }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
import {getCateTree} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      num: 0,
      sortList: [],
      secondList: [],
    };
  },
  mounted(){
    getCateTree().then(res => {
      if(res.code == 200){
        // 获取一级分类
        this.sortList = res.list;
        // 获取二级分类
        this.secondList = res.list[this.num].children
      }else{
        Toast.fail(res.msg)
      }
    })
  },
  methods: {
    change(i) {
      this.num = i;
      // 根据点击 的分类  显示二级分类
      this.secondList = this.sortList[i].children
    },
  },
};
</script>
 
<style scoped>
body {
  background-color: #f1f1f1;
}
.container {
  width: 7.5rem;
  background-color: #fff;
  margin: 0 auto;
}
.container .header {
  width: 7.5rem;
  height: 0.88rem;
  background-color: #f26c10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  color: #fff;
}
.container .header .title {
  font-size: 0.36rem;
}
.container .header .more {
  font-size: 0.5rem;
  margin-right: 0.3rem;
}
.container .header .more span {
  font-size: 0.5rem;
}
.container .goods-sort {
  display: flex;
  height: 14rem;
}
.container .goods-sort .sort-list {
  width: 1.65rem;
  border-right: 1px solid #d9d9d9;
}
.container .goods-sort .sort-list ul {
  padding: 0.4rem 0;
}
.container .goods-sort .sort-list ul li {
  width: 1.65rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.28rem;
  position: relative;
  margin-bottom: 0.6rem;
  color: #666;
}
.container .goods-sort .sort-list ul li .border {
  width: 0.1rem;
  height: 0.52rem;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0.04rem;
}
.container .goods-sort .sort-list ul li.on {
  color: #f26c10;
}
.container .goods-sort .sort-list ul li .border.cur {
  background-color: #f26c10 !important;
}
.container .goods-sort .sort-content {
  width: 5.85rem;
  padding-top: 0.4rem;
}
.container .goods-sort .sort-content .sort-title {
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.28rem;
  color: #666;
}
.container .goods-sort .sort-content .sort-title p:nth-child(1) {
  color: #454545;
  margin-left: 0.55rem;
}
.container .goods-sort .sort-content .sort-title p:nth-child(2) {
  margin-right: 0.45rem;
}
.container .goods-sort .sort-content ul {
  display: flex;
  margin-top: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 0.9rem;
}
.container .goods-sort .sort-content ul li {
  width: 1.9rem;
  height: 2rem;
  margin-bottom: 0.3rem;
}
.container .goods-sort .sort-content ul li img {
  margin: 0 auto;
  width: 1.54rem;
  height: 1.52rem;
}
.container .goods-sort .sort-content ul li p {
  color: #878787;
  font-size: 0.24rem;
  text-align: center;
  margin-top: 0.2rem;
}
.container .goods-sort .sort-content .second img {
  width: 0.82rem;
  height: 1.33rem;
  margin: 0 auto;
}
</style>