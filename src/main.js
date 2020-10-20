import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Platform from './common/platform'
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.config.productionTip = false;

//将平台验证方法添加到全局
let platform =  Platform();
Vue.prototype.$Plateform = platform;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
