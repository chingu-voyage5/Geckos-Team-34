// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'

import { router } from './router'
import { store } from './store'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);


/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
