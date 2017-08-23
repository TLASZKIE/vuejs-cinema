<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies" :movie="movie.movie" :key="movie.id">
        <div class="movie-sessions">
        <div class="session-time-wrapper tooltip-wrapper" v-for="session in movie.sessions.filter(sessionPassesTimeFilter)" 
        v-tooltip="{seats: session.seats}" :key="session.id">
          <div class="session-time">{{formatSessionTime(session.time)}}</div>
        </div>
      </div>
      </movie-item>
    </div>
    <div v-else-if="movies.length" class="no-results">
      {{noResults}}
    </div>
    <div v-else class="no-results">
      Loading...
    </div>
  
  </div>
</template>
<script>
import MovieItem from './MovieItem.vue'
import genres from '../util/genres.js'
import times from '../util/times.js'


export default {
  data() {
    return {
    }
  },
  methods: {
    formatSessionTime(time){
      return this.$moment(time).format("HH:mm")
    },
    moviePassesGenreFilter(movie) {
      if (!this.genre.length)
        return true
      return this.genre.find(genre => movie.movie.Genre.indexOf(genre) > -1)
    },
    sessionPassesTimeFilter(session) {
      if (!this.day.isSame(this.$moment(session.time), 'day'))
        return false

      if (this.time.length === 0 || this.time.length === 2)
        return true

      if(this.time[0] === times.AFTER_6PM){
        return this.$moment(session.time).hour() >= 18
      }

      if(this.time[0] === times.BEFORE_6PM){
        return this.$moment(session.time).hour() < 18
      }

      return true
    }

  },
  computed: {
    filteredMovies() {
      return this.movies
        .filter(this.moviePassesGenreFilter)
        .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter))
    },
    noResults(){
      let times = this.time.join(', ')
      let genres = this.genre.join(', ')
      return `No result for ${times}${times.length && genres.length ? ', ' : ''}${genres}`
    }
  },
  props: ['genre', 'time', 'movies', 'day'],
  components: { MovieItem }
}
</script>