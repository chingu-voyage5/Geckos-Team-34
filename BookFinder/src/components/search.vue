<template>
  <div class="search">
    <v-app>
      <v-content>
        <v-container fluid fill-height class="grey lighten-2">
          <v-layout align-center justify-center>
            <v-flex lg8>
              <v-card class="elevation-12" flat>
                <v-toolbar>
                  <v-icon>search</v-icon> <v-toolbar-title>Search for books</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <p>Enter book title,isbn or Author name</p>
                  <v-form @submit="bookSearch">
                   <v-text-field v-model="book.info" name="search" lable="search" type="text" required icon> <v-icon>search</v-icon></v-text-field>
                            <v-card-actions>
                       <v-spacer></v-spacer>
 <v-btn type="submit" color="primary">Search</v-btn>
                </v-card-actions>

<!--                      <div  v-html="searchtypeMsg"></div>
                      <v-radio-group v-model="book.type" row required>

                        <v-radio label="Title" value="title" :key="1"></v-radio>
                        <v-radio label="isbn" value="isbn" :key="2"></v-radio>
                        <v-radio label="Author" value="author" name="author" :key="3"></v-radio>
                      </v-radio-group>-->

                  </v-form>
                </v-card-text>
<!--- SEARCH RESULTS -->
 <div v-if="(Object.keys(searchResults.Goodreads).length != 0) || (Object.keys(searchResults.Google).length != 0)">
               <v-toolbar color="grey" dark>
                  <v-toolbar-title>Search Results</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list two-line>
                  <span v-for="(result, index) in searchResults" v-bind:key="index">
                    <v-subheader>{{ index }} Results</v-subheader>

                    <div v-if="!result[0].error" v-for="(book, key) in result" v-bind:key="key">
                        <v-list-tile :key="book.title" avatar>
                      <router-link :to="'/book/'+index+'/'+book.id">
                         <v-list-tile-avatar>
                        <img :src="book.small_image_url" >
                      </v-list-tile-avatar>
                      </router-link>
                      <v-list-tile-content>
                      <router-link :to="'/book/'+index+'/'+book.id">
                        <v-list-tile-title v-html="book.title"></v-list-tile-title>
                      </router-link>
                        <v-list-tile-sub-title><span class='text--primary'>{{book.author}}</span>&mdash; {{book.average_rating}}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </div>
                    <div v-else>
                      <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title >No search results found in {{index}}.</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                      </div>
                    <v-divider ></v-divider>
                  </span>
                </v-list>
 </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      book: {info: ""},
      row: null,
      searchResults: {Goodreads: [],Google: []},
    }
  },
  methods: {
    bookSearch: function(e){
      e.preventDefault();
      console.log(this.book.info)
      this.$store.dispatch('searchBooks', { bookInfo: this.book.info} )
      this.searchResults.Google = this.searchGoogle(this.book.info);
      this.searchResults.Goodreads = this.searchGoodReads(this.book.info);
    },
    searchGoogle(info){
      //GoogleBooks search
      var ResultsObjGoogle = [];
      this.$http.get('https://www.googleapis.com/books/v1/volumes?q='+info)
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
      });
      return ResultsObjGoogle;
    },
    searchGoodReads(info){
      //GoodReads search
      var ResultsObjGoodreads = [];
      this.$http.get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key='+this.$GoodReadsApiKey+'&q='+info)
      .then (function(response){
        var x2js = new this.$xmltojson.X2JS();
        var result = x2js.xml_str2json(response.data).GoodreadsResponse.search;
       if (result["total-results"] === "1") {
            var results = result.results.work;
            ResultsObjGoodreads.push({});
            ResultsObjGoodreads[0].id = results.best_book.id;
            ResultsObjGoodreads[0].small_image_url = results.best_book.small_image_url;
            ResultsObjGoodreads[0].author = results.best_book.author.name;
            ResultsObjGoodreads[0].title = results.best_book.title;
            ResultsObjGoodreads[0].average_rating = (typeof results.average_rating == 'string') ? results.average_rating : results.average_rating.__text;
        }else if(result["total-results"] > 1) {
          var results = result.results.work;
          for(var i = 0;i < Object.keys(results).length;i++){
            ResultsObjGoodreads.push({});
            ResultsObjGoodreads[i].id = results[i].best_book.id.__text;
            ResultsObjGoodreads[i].small_image_url = results[i].best_book.small_image_url;
            ResultsObjGoodreads[i].author = results[i].best_book.author.name;
            ResultsObjGoodreads[i].title = results[i].best_book.title;
            ResultsObjGoodreads[i].average_rating = (typeof results[i].average_rating == 'string') ? results[i].average_rating : results[i].average_rating.__text;
          }
        }else {
            ResultsObjGoodreads.push({'error':1});
        }
      });

      return ResultsObjGoodreads;

    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
