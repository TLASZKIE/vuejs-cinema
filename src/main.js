import Vue from 'vue'
import style from './style.scss'

import App from './components/App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import moment from 'moment-timezone'
moment.tz.setDefault("UTC")
Object.defineProperty(Vue.prototype, '$moment', {get(){return this.$root.moment}})

new Vue({
  el: '#app',
  data: {
    movies: [],
    moment
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
