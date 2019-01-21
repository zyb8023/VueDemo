import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/amazeui.css';
import './assets/css/list.css';
Vue.config.productionTip = false

//导入axios
import axios from './plugins/axios';
import store from './store';
//导入全局filter
import filters from './filters';
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
Vue.use(axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
