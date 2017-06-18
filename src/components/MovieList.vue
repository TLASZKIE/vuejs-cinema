<template>
  <div id="movie-list">
  <movie-item v-for="movie in filteredMovies" :movie="movie.movie"></movie-item>
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
    filteredMovies(){
      if( this.genre.length === 0){
        return this.movies
      }
      return this.movies.filter(movie => this.genre.find(genre => genre == movie.Genre))
    }
  },
  props: ['genre', 'time', 'movies'],
  components: {MovieItem}
}
</script>