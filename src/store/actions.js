import Vue from 'vue';
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

let $xmltojson = require('../dist//xml2json.min.js')
let GOODREADS_API_KEY = process.env.GOODREADSKEY // Add your api key here


export default{
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
    
      },grabBook: function ({commit}, payload){
        let src = payload.src;
        let id = payload.id;
        var book = {};
        switch (src){
          case 'Goodreads':
            this.dispatch('GetbookGoodread',{
              id: id
            }).then(res => {  
              book = res;
              commit('grabBook', {
              bookInfo : book
              })
          });
              break;
          case 'Google':
           this.dispatch('GetbookGoogle',{
             id: id
            }).then(res => {
              book = res;
              commit('grabBook', {
                bookInfo : book
              })
                  });
            break;
          default: 
              this.$router.push('/');
         }
      },
      GetbookGoodread: function ({commit},payload){
        var id = payload.id;
        var ResultsObj = {};
        const grUrl = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/show/${id}.xml?key=${GOODREADS_API_KEY}`

        axios.get(grUrl)
        .then (function(response){
            var x2js = new $xmltojson.X2JS();
            var result = x2js.xml_str2json(response.data).GoodreadsResponse.book;
            if(result){
                ResultsObj.id = result.id;
                ResultsObj.title = result.title;
                ResultsObj.image_url = result.image_url;
                ResultsObj.url = result.url;
                ResultsObj.average_rating = result.average_rating;
                ResultsObj.description = result.description;
                var authors = [];
                if (typeof result.authors.author[0] == 'object'){
                    for(var i = 0;i < Object.keys(result.authors).length;i++){
                        authors.push({});
                        authors[i].name = result.authors.author[i].name;
                        authors[i].average_rating = result.authors.author[i].average_rating;
                        authors[i].link = result.authors.author[i].link;
                    }
                }else {
                    authors.push({});
                    authors[0].name = result.authors.author.name;
                    authors[0].average_rating = result.authors.author.average_rating;
                    authors[0].link = result.authors.author.link;
                }
                Vue.set(ResultsObj,'authors', authors);
                Vue.set(ResultsObj,'similar_books',(typeof result.similar_books == 'object' ? result.similar_books.book : ""));
              
          }else{
            ResultsObj.error = 1;
        }
        });
        return ResultsObj;
    },GetbookGoogle: function ({commit},payload){
      var id = payload.id;
      var ResultsObj = {};
      axios.get('https://www.googleapis.com/books/v1/volumes/'+id)
      .then (function(response){
      
          var result = response.data;
          if(!result.error){    
          ResultsObj.id = result.id;
          ResultsObj.title = result.volumeInfo.title;
          ResultsObj.image_url = result.volumeInfo.imageLinks.thumbnail;
          ResultsObj.url = result.volumeInfo.previewLink;
          ResultsObj.average_rating = result.volumeInfo.maturityRating;
          ResultsObj.description = (typeof result.volumeInfo.description == 'string')? result.volumeInfo.description : "N/A";
          var authors = [];

          for(var i = 0;i < Object.keys(result.volumeInfo.authors).length;i++){
                  authors.push({});
                  authors[i].name = result.volumeInfo.authors[i]
                  authors[i].average_rating = "N/A";
                  authors[i].link = "N/A";
              }
              Vue.set(ResultsObj,'authors',authors);
              Vue.set(ResultsObj,'similar_books',[]);
        }else{
             ResultsObj.error = 1;

          }
      });
      return ResultsObj;
  }
}