<template>
  <div id="day-select">
    <ul class="days">
      <li :class="{day: true, active: isActive(day) }" v-for="day in days" :key="day" @click="daySelected(day)">
        {{dayFormat(day)}}
      </li>
      <li class="day-selector">
        <span class="dec" @click="changeDay(-1)"></span>
        <span class="inc" @click="changeDay(1)"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['selectedDay'],
  data() {
    return {
      days: [0, 1, 2, 3, 4, 5, 6].map(num => this.$moment().add(num, 'days'))
    }
  },
  methods: {
    dayFormat(raw) {
      if (raw.isSame(this.$moment(), 'day')) {
        return 'Today'
      }
      return raw.format('ddd DD/MM')
    },
    daySelected(day) {
      this.$bus.$emit('selected-day', day)
    },
    isActive(day) {
      return day.isSame(this.selectedDay, 'day')
    },
    changeDay(change) {
      let newDay = this.selectedDay.clone().add(change, 'day')
      if (this.days.find(d => d.isSame(newDay, 'day'))) {
        this.daySelected(newDay)
      }
    }
  }
}
</script>