import Vue from 'vue';
import Router from 'vue-router';

// 一级路由
import Index from '../components/views/index';
import goodsSort from '../components/views/goodsSort';
import goodsDetail from '../components/views/goodsDetail';
import Login from '../components/views/login';
import Register from '../components/views/register';



// 二级路由
import Home from '../components/pages/home';
import Cart from '../components/pages/cart';
import Mine from '../components/pages/mine';

// 首页
import homeCont from '../components/pages/homeContent'
import sortList from '../components/pages/sortList';

// 购物车
import Order from '../components/pages/order';
import shopCart from '../components/pages/shopCart';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/home',
          component: Home,
          children:[
            {
              path: 'homeCont',
              component: homeCont
            },
            {
              path: 'sortList',
              component: sortList
            },
            {
              path: '',
              component: homeCont
            }
          ]
        },
        {
          path: '/cart',
          component: Cart,
          children:[
            {
              path:'shopcart',
              component: shopCart
            },
            {
              path: 'order',
              component: Order
            },
            {
              path: '',
              redirect: 'shopcart'
            }
          ]
        },
        {
          path: '/mine',
          component: Mine
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path:'/sort',
      component: goodsSort
    },
    {
      path: '/detail',
      component: goodsDetail
    },
    {
      path:'/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

// export default new Router({
//   routes: [
//   ]
// })
export default router
