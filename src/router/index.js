import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from "../components/NotFound.vue";
import Home from "../view/Home"
import BookDetail from "../view/BookDetail";
import BookWeb from "../view/BookWeb";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail',
    name: 'BookDetail',
    component: BookDetail,
  },
  {
    path: '/web',
    name: 'BookWeb',
    component: BookWeb,
  },
  { path: '/', redirect: '/Home' },
  { path: '/*', component: NotFound },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
