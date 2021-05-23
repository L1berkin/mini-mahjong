<template>
  <div
    class="game-card"
    :class="{
      open: open && !beforeStart,
      'before-start': beforeStart
    }"
    @click="openCard"
  >
    <img
      :src="image"
      alt="иконка"
      class="game-card__icon"
      :class="{showImage: open && !beforeStart}"
    >
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    counter: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      clicked: false,
      open: false,
      beforeStart: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.beforeStart = false
    }, this.counter * 100)
  },
  computed: {
    image() {
      return require(`../assets/icons/icon-${this.counter}.svg`)
    },
  },
  methods: {
    openCard() {
      if (this.clicked) {
        return
      }
      this.clicked = true
      this.open = true
      setTimeout(() => {
        this.closeCard()
      }, 5000)
    },
    closeCard() {
      this.clicked = false
      this.open = false
    },
  },
}
</script>

<style scoped>
.game-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 190px;
  height: 300px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 2rem;
  background: #c78b36;
  cursor: pointer;
  transition: .5s;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 #000, inset 0 0 20px -5px #fff2e0;
}

.game-card:hover {
  box-shadow: 0 0 15px 0 #fff, inset 0 0 20px -5px #fff2e0;
}

.game-card__icon {
  width: 80px;
  opacity: 0;
  transform: rotate(180deg);
  transition: 0s .1s;
}

.open {
  background: #ffdeb1;
  box-shadow: 0 0 15px 0 #000, inset 0 0 20px 0px #fff2e0;
  transform: perspective(400px) rotateX(-180deg);
}

.showImage {
  opacity: 1;
  transition: 0s .2s;
}

.before-start {
  transform: translateX(-3500px);
}

@media screen and (max-width: 450px) {
  .game-card {
    height: 200px;
  }
}
</style>
