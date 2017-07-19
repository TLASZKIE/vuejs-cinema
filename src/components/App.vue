<template>
  <div>
    <div id="title">
      <img src="/public/logo.png">
      <h1>Vue.js Cinema</h1>
    </div>
    <div id="overview">
      <div class="main">
        <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
        <movie-filter @check-filter="checkFilter"></movie-filter>
      </div>
    </div>
  </div>
</template>
<script>
import MovieFilter from './MovieFilter.vue'
import MovieList from './MovieList.vue'

export default {
  data() {
    return {
      genre: [],
      time: [],
      day: this.$moment()
    }
  },
  components: {
    MovieFilter,
    MovieList
  },
  methods: {
    checkFilter(type, title, checked) {
      if (checked) {
        this[type].push(title)
      } else {
        let index = this[type].indexOf(title)
        if (index > -1) {
          this[type].splice(index, 1)
        }
      }
    }
  },
  props: ['movies', 'date']
}
</script>