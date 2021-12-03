import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Front/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Back/Products.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Back/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Back/Coupons.vue')
      }
    ]
  },
  { // 進入頁
    path: '/',
    component: () => import('../views/Access.vue')
  },
  {
    path: '/user',
    component: () => import('../views/Front/Userboard.vue'),
    children: [
      { // 首頁
        path: 'Home',
        component: () => import('../views/Front/Home.vue')
      },
      { // 關於我們
        path: 'About',
        component: () => import('../views/Front/About.vue')
      },
      { // 產品列表
        name: 'products',
        path: 'products',
        component: () => import('../views/Front/UserProducts.vue')
      },
      { // 單一產品內容
        name: 'prodInfo',
        path: 'product/:productId',
        component: () => import('../views/Front/UserProductInfo.vue')
      },
      { // 結帳列表
        path: 'cartTable',
        component: () => import('../views/Front/UserCartTable.vue')
      },
      { // 填寫資料列表
        path: 'checkoutForm',
        component: () => import('../views/Front/UserCheckoutForm.vue')
      },
      { // 訂單列表
        path: 'checkout/:orderId',
        component: () => import('../views/Front/UserCheckout.vue')
      },
      { // 我的最愛
        path: 'favorite',
        component: () => import('../views/Front/UserFavorite.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
