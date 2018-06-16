<template>
    <div class="book">
        <v-app>
            <v-content>
                <v-container fluid fill-height class="grey lighten-2">
                    <v-layout align-center justify-center>
                        <v-flex lg6>
                            <v-card class="elevation-12" flat>
                                <div v-if="result.hasOwnProperty('id') & !result.hasOwnProperty('error')">
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
                                            <div>
                                                <li v-for="book in similar">
                                                    <a :href=book.wUrl target="_blank">{{book["Name"]}}</a>
                                                </li>

                                                {{similarBooks}}
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
            src: this.$route.params.src,
            similar: {}
        }
    },
    computed: {
        similarBooks() {
            var book = this.result.info;
            var similar_books = {};
            book = book.replace(/ /g,"+");
            const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${book}&type=books&k=${process.env.TASTEDIVEKEY}&info=1`;
            console.log(fetch(url)
            .then(response => response.json())
            .then(data => {
                Object.assign(similar_books, data["Similar"]["Results"]);
                this.similar = similar_books;
                return {1:{one:1, two:2}, two:2, three:3}
                return similar_books;
            }));
        },
    },
    methods: {
        getBook: function (src,id){
            this.$store
            .dispatch("grabBook", {
                src: src,
                id : id
            })
            .then(res => {
                this.result = this.$store.getters.grabBook;
            })
            .catch(err => {
                console.log("Grab book Failed", err);
            });
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
