import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: {}
  },
  mutations: {
    searchBooks (state, payload) {

    }
  },
  actions: {
    searchBooks ({commit}, payload) {
      // TODO
    }
  },
  getters: {
    getSearchResults (state) {
      return state.searchResults
    }
  }
})
