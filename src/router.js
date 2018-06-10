import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from './store'

Vue.use(VueRouter);

import search from './components/search'
import book from './components/book'
import login from './components/login'
import signup from './components/signup'
import profile from './components/profile'


export const router = new VueRouter({
    mode: 'history',//hash
    base: __dirname,
    routes: [
      {
        path:'/',
        component: search
      },
      {
        path: '/book/:src/:id/',
        component: book
      },
      {
        path: '/signup',
        component: signup
      },
      {
        path: '/login',
        component: login
      },
      {
        path: '/profile',
        component: profile,
      /*  meta: {
          requiresAuth : true
        }*/
        beforeEnter : AuthGuard //function 
      }

    ]
  })

  function AuthGuard(to,from,next){
    /*
    store.dispatch('checkUser').then (res => {
        let currentUser = store.getters.user;
      });
    */
      if (store.getters.user) {
        next()
      } else {
        next('/login')
      }

  }