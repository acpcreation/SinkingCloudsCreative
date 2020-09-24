import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FundamentalVue from 'fundamental-vue'

Vue.config.productionTip = false
Vue.use(FundamentalVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
