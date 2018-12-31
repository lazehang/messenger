// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index.js'
import Chat from 'vue-beautiful-chat'

const firebase = require('./firebase')

Vue.use(Chat)

Vue.config.productionTip = false

/* eslint-disable no-new */
let app
firebase.auth.onAuthStateChanged(user => {
  if (!app) {
      app = new Vue({
          el: '#app',
          router,
          store,
          render: h => h(App)
      })
  }
})
