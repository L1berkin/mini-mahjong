<template>
  <div class="results-page">
    <table-results />
  </div>
</template>

<script>
import TableResults from '../components/TableResults.vue'

export default {
  components: { TableResults },
  name: 'Results',
}
</script>

<style scoped>
.results-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
}
</style>
