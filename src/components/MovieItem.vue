<template>
  <div class="movie">
    <div class="movie-col-left">
      <img :src="movie.Poster">
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <h2>{{movie.Title}}</h2>
        <span class="movie-rating">{{movie.Rated}}</span>
      </div>
      <div class="movie-sessions">
        <div class="session-time-wrapper" v-for="session in sessions" :key="session.id">
          <div class="session-time">{{formatSessionTime(session.time)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['movie', 'sessions', 'day'],
  computed:{
    filteredSessions() {
      return this.sessions.filter((session) => this.$moment(session.time).isSame(this.day, 'day'))
    }
  },
  methods:{
    formatSessionTime(time){
      return this.$moment(time).format("HH:mm")
    }
  }
}
</script>
