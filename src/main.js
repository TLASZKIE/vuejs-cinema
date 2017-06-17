import Vue from 'vue'
import style from './style.scss'

import MovieFilter from './components/MovieFilter.vue'
import MovieList from './components/MovieList.vue'

new Vue({
  el: '#app',
  data:{
  },
  components:{
    MovieFilter,
    MovieList
  }
}

)
