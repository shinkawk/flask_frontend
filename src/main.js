import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.prototype.$appName = 'My App'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://localhost:3000'
      }
    }
  }
}
