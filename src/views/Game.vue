<template>
  <div class="game-page">
    <game-timer />
    <game-table />
  </div>
</template>

<script>
import GameTable from '../components/GameTable.vue'
import GameTimer from '../components/GameTimer.vue'

export default {
  components: { GameTimer, GameTable },
  name: 'Game',
}
</script>

<style scoped>

</style>
