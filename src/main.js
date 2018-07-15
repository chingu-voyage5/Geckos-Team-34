// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'

import { router } from './router'
import { store } from './store'
import firebase from 'firebase'
import dotenv from 'dotenv'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);
dotenv.config();

var config = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "book-manager-df1e4.firebaseapp.com",
    databaseURL: "https://book-manager-df1e4.firebaseio.com",
    projectId: "book-manager-df1e4",
    storageBucket: "book-manager-df1e4.appspot.com",
    messagingSenderId: "832377572325"
};
firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
