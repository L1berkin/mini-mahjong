<template>
  <section class="card-table">
    <game-card
      v-for="el in 12"
      :key="el"
      :counter="el"
    />
  </section>
</template>

<script>
import GameCard from './GameCard.vue'

export default {
  components: { GameCard },
  name: 'GameTable',
}
</script>

<style scoped>
.card-table {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;
  width: 80%;
  max-width: 1300px;
  margin: 50px auto 0;
  padding-bottom: 60px;
  border: 1px solid #000;
}

@media screen and (max-width: 1430px) {
  .card-table {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 880px) {
  .card-table {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 650px) {
  .card-table {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 450px) {
  .card-table {
    width: 96%;
  }
}
</style>
