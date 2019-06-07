import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/global.css' /*引入公共样式*/
import {Form, Input, Button, message, Spin} from 'ant-design-vue'

Vue.config.productionTip = false
Vue.prototype.$message = message
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Spin)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
