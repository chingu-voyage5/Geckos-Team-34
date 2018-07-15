import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations';
import actions from './actions';
import getters from './getters';


Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    searchResults: {Goodreads: [],Google: []},
    bookInfo : {},
    user: null,
    similarBooks: {}
  },
  mutations,
  actions,
  getters

})
