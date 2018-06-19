import '@/common/css/normalize.css'
import '@/common/scss/index.scss'
import Vue from 'vue'
import App from './App'
import router from './router/index.js'

Vue.config.productionTip = false
/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
