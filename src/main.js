import Vue from 'vue'
import style from './style.scss'

import App from './components/App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  el: '#app',
  data: {
    movies: []
  },
  components: {
    App
  },
  created () {
    this.$http.get('/api').then((response) => {
      this.movies = response.data
    })
  }
}

)
