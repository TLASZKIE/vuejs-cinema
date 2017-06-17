<template>
  <div id="movie-list">
  <div class="movie" v-for="movie in movies">{{movie.title}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movies: [
        { title: 'Pulp fiction' },
        { title: 'Wall-E' },
        { title: 'Mad Max' },
      ]
    }
  }
}
</script>