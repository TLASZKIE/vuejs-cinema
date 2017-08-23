<template>
  <div id="detail" v-if="movie">
    <movie-item :movie="movie">
      <div class="movie-details">
        <p class="movie-genre">{{movie.Genre}}</p>
        <p class="movie-plot">{{movie.Plot}}</p>
        <table>
          <tr><td>Released date:</td><td>{{movie.Released}}</td></tr>
          <tr><td>Runing time:</td><td>{{movie.Runtime}}</td></tr>
          <tr><td>Director:</td><td>{{movie.Director}}</td></tr>
          <tr><td>Cast:</td><td>{{movie.Actors}}</td></tr>
        </table>
      </div>
    </movie-item>
    <div class="home"><router-link :to="{name: 'home'}">Back to results</router-link></div>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue'
export default {
  name: 'detail',
  props: ['movies'],
  data() {
    return {}
  },
  computed: {
    movie() {
      let movieId = this.$route.params.id
      let movie = this.movies.find(item => item.id === movieId)
      return movie ? movie.movie : null
    }
  },
  created() {
    console.log(this.$route.params.id)
  },
  mounted() { },
  methods: {},
  components: { MovieItem }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>