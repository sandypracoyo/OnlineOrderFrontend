import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/product/Product.vue')
  },
  {
    path: '/editproduct/:id',
    name: 'EditProduct',
    component: () => import('../views/product/FormEditProduct.vue')
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: () => import('../views/product/FormAddProduct.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../views/customer/Customer.vue')
  },
  {
    path: '/editcustomer/:id',
    name: 'editCustomer',
    component: () => import('../views/customer/FormEditCustomer.vue')
  },
  {
    path: '/addcustomer',
    name: 'AddCustomer',
    component: () => import('../views/customer/FormAddCustomer.vue')
  },
  {
    path: '/detailcustomer/:id',
    name: 'DetailCustomer',
    component: () => import('../views/customer/DetailCustomer.vue')
  },
  {
    path: '/driver',
    name: 'Driver',
    component: () => import('../views/driver/Driver.vue')
  },
  {
    path: '/adddriver',
    name: 'AddDriver',
    component: () => import('../views/driver/FormAddDriver.vue')
  },
  {
    path: '/editdriver/:id',
    name: 'editDriver',
    component: () => import('../views/driver/FormEditDriver.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
