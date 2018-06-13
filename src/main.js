// 引入css
import 'minireset.css/minireset.css';
import 'font-awesome/css/font-awesome.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css/animate.css';

import './assets/style/common.scss';

import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';

import router from './router/index';

import './mock/mockList.js';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
