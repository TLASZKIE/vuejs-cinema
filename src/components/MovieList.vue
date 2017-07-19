<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies" :movie="movie.movie" :sessions="movie.sessions" :key="movie.id"></movie-item>
    </div>
    <div v-else-if="movies.length" class="no-results">
      No results
    </div>
    <div v-else class="no-results">
      Loading...
    </div>
    
  </div>
</template>
<script>
import MovieItem from './MovieItem.vue'
import genres from '../util/genres.js'

export default {
  data() {
    return {
    }
  },
  computed: {
    filteredMovies() {
      if (this.genre.length === 0) {
        return this.movies
      }
      return this.movies.filter(movie => this.genre.find(
          genre => movie.movie.Genre.indexOf(genre) > -1))
    }
  },
  props: ['genre', 'time', 'movies', 'currentDate'],
  components: { MovieItem }
}
</script>