// @author Yangxiong
import './assets/styles/index.scss'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'

import App from './App.vue'
import components from './components'

Vue.config.productionTip = false
Vue.use(components)
Vue.use(ElementUI)
// 创建应用根组件
const app = new Vue({
  router,
  components: { App },
  template: '<App/>'
})

// webpack热更新支持
if (module.hot) {
  module.hot.accept()
}

// 将DOM结构注入页面
app.$mount('#app')
