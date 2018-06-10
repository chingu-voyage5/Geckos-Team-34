// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import dotenv from 'dotenv'

import { router } from './router'
import { store } from './store'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);
dotenv.config();

var config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_projectId + ".firebaseapp.com",
  databaseURL: "https://"+process.env.FIREBASE_projectId+".firebaseio.com",
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_projectId+".appspot.com",
  messagingSenderId: process.env.messagingSenderId
};
firebase.initializeApp(config); 

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
