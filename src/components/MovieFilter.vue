<template>
  <div id="movie-filter">
    <h2>Filter</h2>
    <h3>Genre</h3>
    <div class="filter-group">
      <check-filter v-for="genre in genres" :title="genre" :type="'genre'" :key="genre" @check-filter="checkFilter"></check-filter>
    </div>
    <h3>Time</h3>
    <div class="filter-group">
      <check-filter v-for="time in times" :title="time" :type="'time'" :key="time" @check-filter="checkFilter"></check-filter>
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
  methods: {
    checkFilter(type, title, checked) {
      this.$emit('check-filter', type, title, checked)
    }
  },
  components: { CheckFilter }
}
</script>