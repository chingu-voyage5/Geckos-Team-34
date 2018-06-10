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
                  <v-spacer></v-spacer>
                      <v-toolbar-items  v-if="!user" class="hidden-sm-and-down">
                        <router-link to="/login" tag="v-btn">Login</router-link>
                        <router-link to="/signup" tag="v-btn" flat>Signup</router-link>
                      </v-toolbar-items>
                      <v-toolbar-items  v-else class="hidden-sm-and-down">
                        <router-link to="/profile" tag="v-btn">profile</router-link>
                      </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                  <p>Enter book title,isbn or Author name</p>
                  <v-form @submit="bookSearch">
                    <v-text-field v-model="book.info" name="search" lable="search" type="text" required icon> <v-icon>search</v-icon></v-text-field>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" color="primary">Search</v-btn>
                      </v-card-actions>
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
  name: "search",
  data() {
    return {
      book: { info: "" },
      row: null,
      searchResults: { Goodreads: [], Google: [] },
      user : null
    };
  },
  methods: {
    bookSearch: function(e) {
      e.preventDefault();
      this.$store
        .dispatch("searchBooks", { bookInfo: this.book.info })
        .then(res => {
          return this.$store.getters.getSearchResults;
        })
        .then(res => {
          this.searchResults.Google = res.Google;
          this.searchResults.Goodreads = res.Goodreads;
        })
        .catch(err => {
          console.log("search failed", err);
        });
    },        
    getUser(){
            this.user = this.$store.getters.user;
        }

  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
