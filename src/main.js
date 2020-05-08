import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '@/store/store.js'
import 'normalize.css'
import zhihuAxios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$zhihuAxios = zhihuAxios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
