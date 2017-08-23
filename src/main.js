import Vue from 'vue'
import style from './style.scss'

import VueResource from 'vue-resource'

Vue.use(VueResource)

import moment from 'moment-timezone'
moment
  .tz
  .setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', {
  get () {
    return this.$root.moment
  }
})

let bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', {
  get () {
    return this.$root.bus
  }
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './util/routes'
let router = new VueRouter({routes})

import Tooltip from './util/tooltip'
Vue.use(Tooltip)

new Vue({
  el: '#app',
  data: {
    movies: [],
    moment,
    bus
  },
  created () {
    this
      .$http
      .get('/api')
      .then((response) => {
        this.movies = response.data
      })
  },
  router
})
