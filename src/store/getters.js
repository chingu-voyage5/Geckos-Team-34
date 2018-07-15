export default {
        getSearchResults (state) {
          return state.searchResults
        },
        grabBook (state) {
          return state.bookInfo
        },
        getSimilarBooks(state) {
            return state.similarBooks
        },
        user(state) {
            return state.user
        }
}
