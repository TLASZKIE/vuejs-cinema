<template>
  <div id="movie-filter">
    <h2>Filter</h2>
    <div class="filter-group">
      <check-filter v-for="genre in genres" :title="genre"></check-filter>
    </div>
  </div>
</template>
<script>
import CheckFilter from './CheckFilter.vue'
import genres from '../util/genres.js'

export default {
  data() {
    return { genres: genres }
  },
  components: { CheckFilter }
}
</script>