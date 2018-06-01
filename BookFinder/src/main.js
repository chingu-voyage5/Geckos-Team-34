// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'

import search from './components/search'
import book from './components/book'
Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css' 
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.prototype.$xmltojson = require('./xml2json.min.js');


const router = new VueRouter({
  mode: 'history',//hash
  base: __dirname,
  routes: [
    {path:'/',component: search},
   {path: '/book/:src/:id/',component: book}
  ]
})
/* eslint-disable no-new */
new Vue({
//  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
