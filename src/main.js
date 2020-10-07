import Vue from 'vue';
import App from './App.vue';
import router from './router';

import "./util/router_guard";//路由守卫
import './assets/css/common.css';//公共样式
import './filter';//过滤器
import './util/prototype_util';//在原型上封装一些工具方法
import ElementUI from 'element-ui';
//生产环境用的cdn，所以只有测试环境才导入
if (process.env.NODE_ENV === 'development') {
  import('element-ui/lib/theme-chalk/index.css');
}
Vue.use(ElementUI);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });


if (process.env.NODE_ENV === 'production') {
  Vue.config.productionTip = false;
  Vue.config.devtools = false;
} else {
  Vue.config.productionTip = true;
  Vue.config.devtools = true;
}

Vue.config.errorHandler = function (err, vm, info) {
  console.error('错误信息: ', err);
  console.error('Vue 实例: ', vm);
  console.error('Vue 特定的错误信息: ', info);
};


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
