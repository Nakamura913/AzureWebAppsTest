import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import UserLogin from './components/UserLogin.vue'
import ChatOpenAI from './components/ChatOpenAI.vue'

Vue.config.productionTip = false

// ルーティング設定
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: UserLogin
    },
    {
      path: '/home',
      component: ChatOpenAI
    }
  ]
})

new Vue({
  render: h => h(App),
}).$mount('#app')
