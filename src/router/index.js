import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Product/Product';
import ShowDetails from '../views/Product/ShowDetails';
import Cart from '../views/Cart';
import Checkout from '../views/Checkout/Checkout';
import Payment from '../views/Payment/Payment'
import OrderHistory from '../views/OrderHistory/OrderHistory'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/orders',
    name: 'OrderHistory',
    component: OrderHistory,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },

  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/cart/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/cart/checkout/payment',
    name: 'Payment',
    component: Payment,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
