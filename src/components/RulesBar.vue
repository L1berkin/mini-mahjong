<template>
  <section class="rules">
    <base-button
      @click="toggleRules"
    >
      Правила
    </base-button>
    <div
      class="rules__container"
      :class="{open: opened}"
      @click.stop
    >
      <h3 class="rules__title">Правила игры</h3>
      <p class="rules__text">
        После начала игры, запускается таймер.
        Цель игры сделать так, чтобы на столе ни осталось ни одной карты.
        При клике по карте она открывается на 5 секунд.
        В это время игрок должен открыть вторую карту либо просто запомнить открытую.
        Если иконки на двух открытых картах совпадают, они исчезают.
        Игра заканчивается, когда все пары карт найдены.
      </p>
      <p class="rules__subtitle">
        Удачи!
      </p>
      <img
        src="../assets/venzel.png"
        alt="вензель"
        class="rules__venzel"
      >
    </div>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components: { BaseButton },
  name: 'RulesBar',
  data() {
    return {
      opened: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.closeRules)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeRules)
  },
  methods: {
    toggleRules() {
      this.opened = !this.opened
    },
    closeRules() {
      this.opened = false
    },
  },
}
</script>

<style scoped>
.rules {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  min-height: 100px;
}

.rules__container {
  position: absolute;
  top: 70px;
  width: 90%;
  max-width: 400px;
  height: 10px;
  padding: 0 15px;
  background: #ffdeb1;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 #000, inset 0 0 20px 0 #fff2e0;
  transition: 1s;
}

.rules__container::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 10px;
  background: #037050;
}

.rules__title {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
}

.rules__text {
  margin-top: 15px;
  font-size: 1rem;
  line-height: 1.2rem;
}

.rules__subtitle {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.rules__venzel {
  width: 100%;
}

.open {
  padding: 20px 15px 10px;
  height: 450px;
}

@media screen and (max-width: 400px) {
  .rules__title {
    font-size: 1.8rem;
  }

  .rules__text {
    font-size: .8rem;
  }

  .rules__subtitle {
    font-size: 1.3rem;
  }
}
</style>
