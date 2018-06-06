import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let $xmltojson = require('../xml2json.min.js')

Vue.use(Vuex)

let GOODREADS_API_KEY = 'KFfHdhSPL1nJGx1UXLl9Q' // Add your api key here

export default new Vuex.Store({
  state: {
    searchResults: {Goodreads: [],Google: []}
  },
  mutations: {
    searchBooks (state, payload) {
      state.searchResults.Google = payload.google
      state.searchResults.Goodreads = payload.goodreads
    }
  },
  actions: {
    searchBooks ({commit}, payload) {
      // Google
      let info = payload.bookInfo
      var ResultsObjGoogle = [];
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+info)
        .then (function(response){
          var result = response.data;
        if (result.totalItems != 0) {
            var results = result.items;
            for(var i = 0;i < Object.keys(results).length;i++){
              ResultsObjGoogle.push({});
              ResultsObjGoogle[i].id = results[i].id;
              ResultsObjGoogle[i].small_image_url = ((results[i].volumeInfo.hasOwnProperty('imageLinks'))) ? results[i].volumeInfo.imageLinks.smallThumbnail: "";
              ResultsObjGoogle[i].author = (results[i].volumeInfo.hasOwnProperty('authors')) ?  results[i].volumeInfo.authors[0] : "";
              ResultsObjGoogle[i].title = results[i].volumeInfo.title;
              ResultsObjGoogle[i].average_rating = "";
            }
          }else {
              ResultsObjGoogle.push({'error':1});
          }
        })
        .catch(err => {
          console.log(err)
        })
        // ResultsObjGoogle

        // Goodreads
        var ResultsObjGoodreads = [];
        const grUrl = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${GOODREADS_API_KEY}&q=${info}`
        console.log(grUrl)
        axios.get(grUrl)
          .then (function(response){
            var x2js = new $xmltojson.X2JS();
            var result = x2js.xml_str2json(response.data).GoodreadsResponse.search;
            if (result["total-results"] === "1") {
                var results = result.results.work;
                ResultsObjGoodreads.push({});
                ResultsObjGoodreads[0].id = results.best_book.id;
                ResultsObjGoodreads[0].small_image_url = results.best_book.small_image_url;
                ResultsObjGoodreads[0].author = results.best_book.author.name;
                ResultsObjGoodreads[0].title = results.best_book.title;
                ResultsObjGoodreads[0].average_rating = (typeof results.average_rating == 'string') ? results.average_rating : results.average_rating.__text;
            } else if (result["total-results"] > 1) {
              var results = result.results.work;
              for(var i = 0;i < Object.keys(results).length;i++){
                ResultsObjGoodreads.push({});
                ResultsObjGoodreads[i].id = results[i].best_book.id.__text;
                ResultsObjGoodreads[i].small_image_url = results[i].best_book.small_image_url;
                ResultsObjGoodreads[i].author = results[i].best_book.author.name;
                ResultsObjGoodreads[i].title = results[i].best_book.title;
                ResultsObjGoodreads[i].average_rating = (typeof results[i].average_rating == 'string') ? results[i].average_rating : results[i].average_rating.__text;
              }
            } else {
                ResultsObjGoodreads.push({'error':1});
            }
          })
          .catch(err => {
            console.log(err)
          })
          // ResultsObjGoodreads

          commit('searchBooks', {
            google : ResultsObjGoogle,
            goodreads : ResultsObjGoodreads
          })
    }
  },
  getters: {
    getSearchResults (state) {
      return state.searchResults
    }
  }
})
