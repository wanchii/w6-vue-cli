import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/front/Layout.vue'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/front/Products.vue'),
      }, {
        path: '/product/:id',
        component: () => import('../views/front/Product.vue'),
      }, {
        path: '/cart',
        component: () => import('../views/front/Cart.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
