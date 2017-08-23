<template>
  <div id="movie-filter">
    <h2>Filter results</h2>
    <h3>By genre</h3>
    <div class="filter-group">
      <check-filter v-for="genre in genres" :title="genre" :type="'genre'" :key="genre"></check-filter>
    </div>
    <h3>By time of day</h3>
    <div class="filter-group">
      <check-filter v-for="time in times" :title="time" :type="'time'" :key="time"></check-filter>
    </div>
  </div>
</template>
<script>
import CheckFilter from './CheckFilter.vue'
import genres from '../util/genres.js'
import times from '../util/times.js'

export default {
  data() {
    return {
      genres: genres,
      times: times
    }
  },
  components: { CheckFilter }
}
</script>