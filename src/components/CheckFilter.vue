<template>
  <div :class="{'check-filter': true, active: checked}" @click="checked = !checked">
    <span class="checkbox"></span>
    <span class="check-filter-title">{{title}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: false
      }
    },
    props: ['title']
  }
</script>
