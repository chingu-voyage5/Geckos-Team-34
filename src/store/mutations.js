export default{

    grabBook (state, payload){
        state.bookInfo = payload.bookInfo;
    },
    searchBooks (state, payload) {
        state.searchResults.Google = payload.google;
        state.searchResults.Goodreads = payload.goodreads;  
    },
    setUser (state,payload){
        state.user = payload.user;
    }
}