import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
// 用元件方式使用Loading
Vue.component('Loading', Loading);
// 套件加入到Vue的圓型內
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
