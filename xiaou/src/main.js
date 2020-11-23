// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入重置样式表
import './assets/css/reset.css'
// 引入remScale.js
import './assets/js/remScale'
//引入阿里矢量图标
import './assets/font/iconfont.css'

// 引入vant ui 框架
import Vant from 'vant';
Vue.use(Vant);
// 引入vant 的样式
import 'vant/lib/index.css'

Vue.prototype.$imgUrl = 'http://localhost:3000'

// 导入封装的全局组件
import comComponent from  './common/index'
for(let i in comComponent){
  Vue.component(i, comComponent[i]);
}



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
