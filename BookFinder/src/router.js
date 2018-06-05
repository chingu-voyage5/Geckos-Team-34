import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import search from './components/search'
import book from './components/book'


export const router = new VueRouter({
    mode: 'history',//hash
    base: __dirname,
    routes: [
      {path:'/',component: search},
     {path: '/book/:src/:id/',component: book}
    ]
  })