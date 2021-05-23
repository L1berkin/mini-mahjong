<template>
  <div class="game-page">
    <base-modal
      v-if="showModal"
      @click="modalClick"
    />
    <template v-else >
      <game-timer
        v-if="!endGame"
      />
      <game-table
        v-if="!endGame"
        :numberOfCards="numberOfCards"
      />
      <wind-bar
        v-else
      />
    </template>
  </div>
</template>

<script>
import BaseModal from '../components/BaseModal.vue'
import GameTable from '../components/GameTable.vue'
import GameTimer from '../components/GameTimer.vue'
import WindBar from '../components/WindBar.vue'
import { CLEAR_STATE } from '../store/actions'

export default {
  components: {
    GameTimer, GameTable, WindBar, BaseModal,
  },
  name: 'Game',
  data() {
    return {
      numberOfCards: 12,
      showModal: true,
    }
  },
  mounted() {
    const { timer } = this.$store.getters
    if (timer === 0) {
      this.showModal = false
    }
  },
  computed: {
    endGame() {
      const { hiddenCards } = this.$store.getters
      return hiddenCards.length === this.numberOfCards / 2
    },
  },
  methods: {
    modalClick(answer) {
      if (!answer) {
        this.$store.dispatch(CLEAR_STATE)
      }
      this.showModal = false
    },
  },
}
</script>

<style scoped>

</style>
