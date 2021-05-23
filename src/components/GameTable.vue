<template>
  <section class="card-table">
    <game-card
      v-for="el in cards"
      :key="'' + el + Math.random()"
      :counter="Math.round(el / 2)"
    />
  </section>
</template>

<script>
import GameCard from './GameCard.vue'

export default {
  components: { GameCard },
  name: 'GameTable',
  props: {
    numberOfCards: {
      type: Number,
      defaultStatus: 36,
    },
  },
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    for (let i = 1; i <= this.numberOfCards; i += 1) {
      this.cards.push(i)
    }
    this.sortCards()
  },
  beforeDestroy() {
    const { hiddenCards } = this.$store.getters
    if (hiddenCards.length === this.numberOfCards / 2) {
      const results = JSON.parse(localStorage.getItem('results'))
      if (results) {
        const newResults = {
          data: [
            ...results.data,
            { date: new Date(), time: this.$store.getters.normalTime },
          ],
        }
        localStorage.setItem('results', JSON.stringify(newResults))
      } else {
        localStorage.setItem('results', JSON.stringify({
          data: [
            { date: new Date(), time: this.$store.getters.normalTime },
          ],
        }))
      }
    }
  },
  methods: {
    sortCards() {
      let j;
      let temp;
      for (let i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = temp;
      }
    },
  },
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
