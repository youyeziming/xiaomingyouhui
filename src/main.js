import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'

Vue.config.productionTip = false

console.log(1)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
