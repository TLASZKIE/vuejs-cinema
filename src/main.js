import Vue from 'vue'
import style from './style.scss'

import MovieFilter from './components/MovieFilter.vue'
import MovieList from './components/MovieList.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: []
  },
  methods: {
    checkFilter (type, title, checked) {
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
  components: {
    MovieFilter,
    MovieList
  },
  created () {
    this.$http.get('/api').then((response) => {
      this.movies = response.data
    })
  }
}

)
