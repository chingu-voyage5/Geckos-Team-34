<template>
    <div class="book">

    <v-app>
      <v-content>
        <v-container fluid fill-height class="grey lighten-2">
          <v-layout align-center justify-center>
            <v-flex lg6>
              <v-card class="elevation-12" flat>
                  <div v-if="result.id & !result.error">
  <v-card-media
          class="white--text"
          height="200px"
          :src="result.image_url">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline"><a :href=result.url target="_blank">{{result.title}}</a></span>
              </v-flex>
            </v-layout>
          </v-container>
</v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">{{result.average_rating}}</span><br>
            <span v-html="result.description"></span><br>
            <span> 
                         <v-subheader>Authors</v-subheader>

        <div v-for="(author, index) in result.authors" :key="index">
                <v-list-tile :key="author.name" >
                      <v-list-tile-content>
<a :href=author.link target="_blank">
                        <v-list-tile-title v-html="author.name"></v-list-tile-title>
</a>         <v-list-tile-sub-title><span class='text--primary'>{{author.average_rating}}</span></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </div>
</span>        <span>
             <v-subheader>Similar Books</v-subheader>

                    <div v-for="(book, key) in result.similar_books" v-bind:key="key">
                        <v-list-tile :key="book.title" avatar>
                      <router-link :to="'/book/Goodreads/'+book.id">
                         <v-list-tile-avatar>
                        <img :src="book.small_image_url" >
                      </v-list-tile-avatar>
                      </router-link>
                      <v-list-tile-content>
                      <router-link :to="'/book/Goodreads/'+book.id">
                        <v-list-tile-title v-html="book.title"></v-list-tile-title>
                      </router-link>
                        <v-list-tile-sub-title><span class='text--primary'>{{book.authors.author.name}}</span>&mdash; {{book.average_rating}}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </div>


        </span>
          </div>
</v-card-title>
<!-- @TODO FEATURES TO BE ADDED-->
        <v-card-actions>
          <v-btn flat color="orange">read</v-btn>
          <v-btn flat color="orange">share</v-btn>
</v-card-actions>
                </div>
                                    <div v-else-if="result.error">  
                      <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title >No search results found in {{index}}.</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                      </div>
                    <v-divider ></v-divider>

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
    name : 'book',
    data(){
        return {
            result: {},
            id: this.$route.params.id,
            src: this.$route.params.src
        }
    },
    methods: {
        getBook(src,id){
            switch (src){
            case 'Goodreads':
              //  this.$set(this,'result',this.GetbookGoodread(this.id)); //   
              this.result = this.GetbookGoodread(id);
                break;
            case 'Google':
                this.result = this.GetbookGoogle(id);
                break;
            default: 
                this.$router.push('/');
           }


        },
        GetbookGoodread: function (id){
            var ResultsObj = {};
            this.$http.get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/show/'+id+'.xml?key=whM4DZOLcr7BsKwZs1Gclw')
            .then (function(response){
                var x2js = new this.$xmltojson.X2JS();
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
                    this.$set(ResultsObj,'authors', authors);
                    this.$set(ResultsObj,'similar_books',result.similar_books.book);
            }else{
                ResultsObj.error = 1;
            }
              //  console.log(response.data);
            });
            return ResultsObj;
        },
        GetbookGoogle: function(id){
            var ResultsObj = {};
            this.$http.get('https://www.googleapis.com/books/v1/volumes/'+id)
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
                this.$set(ResultsObj,'authors', authors);
                this.$set(ResultsObj,'similar_books',[]);
                }else{
                   ResultsObj.error = 1;
 
                }
            });
            return ResultsObj;
        }
    },beforeRouteUpdate(to) {
        this.id = to.params.id;
        this.getBook(this.src,this.id);
    },
    beforeMount(){
        this.getBook(this.src,this.id);
    },
    created: function(){

    }
}
</script>

<style scoped>

</style>
