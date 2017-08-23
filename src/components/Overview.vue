<template>
  <div id="overview">
      <day-select :selectedDay="day"></day-select>
      <div class="main">
        <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
        <movie-filter></movie-filter>
      </div>
    </div>
</template>
<script>
import MovieFilter from './MovieFilter.vue'
import MovieList from './MovieList.vue'
import DaySelect from './DaySelect.vue'

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
    MovieList,
    DaySelect
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
    },
    daySelected(day){
      this.day = day
    }
  },
  props: ['movies', 'date'],
  created(){
    this.$bus.$on('check-filter', this.checkFilter)
    this.$bus.$on('selected-day', this.daySelected)
  }
}
</script>