// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入svg
import './assets/svg';

//图片懒加载
import VueLazyload from 'vue-lazyload'

//引入axios
import service from './utils/axios'
Vue.prototype.$axios = service

Vue.config.productionTip = false;

Vue.use(elementUI);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  //在js中引入图片 需要使用require
  error: require('./assets/image/img-error.png'),
  loading: require('./assets/image/img-error.png'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
