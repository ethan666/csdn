import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/global.css' /*引入公共样式*/
import {Form, Input, Button, message} from 'ant-design-vue'

Vue.config.productionTip = false
Vue.prototype.$message = message
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
