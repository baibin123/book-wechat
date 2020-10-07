import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import NotFound from "../components/common/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      { path: 'company', component: () => import(/* webpackChunkName: "group-admin" */ '../views/admin/Company.vue') },
      { path: 'qr',name: 'qr', component: () => import(/* webpackChunkName: "group-admin" */ '../views/admin/QRCode.vue') },
      { path: 'modify-pwd', component: () => import(/* webpackChunkName: "group-admin" */ '../views/setting/ModifyPwd') },
    ]
  },
  { path: '/sign-in', name: 'SignIn', component: () => import(/* webpackChunkName: "group-login" */ '../views/login/SignIn.vue') },
  { path: '/qr/:code', component: () => import(/* webpackChunkName: "group-qr" */'../views/QRContent') },
  { path: '/mobile-sign-in', component: () => import(/* webpackChunkName: "group-mobile" */ '../views/mobile/SignIn.vue') },
  { path: '/mobile-qr', component: () => import(/* webpackChunkName: "group-mobile" */'../views/mobile/QRCode') },
  { path: '/mobile-edit-qr/:code', component: () => import(/* webpackChunkName: "group-mobile" */'../views/mobile/EditQR') },
  { path: '/', redirect: '/sign-in' },
  { path: '/*', component: NotFound },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
