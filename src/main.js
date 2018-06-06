// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'

import { router } from './router'
import store from './store'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueResource);
Vue.use(Vuetify);

Vue.prototype.$xmltojson = require('./xml2json.min.js');
Vue.prototype.$GoodReadsApiKey = process.env.GOODREADS_API_KEY;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
