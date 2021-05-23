<template>
  <section class="win-bar">
    <h2 class="win-bar__title">
      Вы выиграли<br>
      за<br>
      {{ time }}
    </h2>
    <router-link
      class="win-bar__link"
      to="/results"
    >
      Таблица результатов
    </router-link>
  </section>
</template>

<script>
import { CLEAR_STATE } from '../store/actions'

export default {
  name: 'WinBar',
  beforeDestroy() {
    this.$store.dispatch(CLEAR_STATE)
  },
  computed: {
    time() {
      return this.$store.getters.normalTime
    },
  },
}
</script>

<style scoped>
.win-bar {
  margin-top: -60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.win-bar__title {
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 2.5rem;
}

.win-bar__link {
  display: inline-block;
  margin-top: 50px;
  padding: 10px 20px;
  transition: .2s;
  color: #000;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #323e3b;
  background: #fff;
  box-shadow: 0 5px 10px 0 #000, inset 0 0 20px -15px #037050;
}

.win-bar__link:hover {
  box-shadow: 0 5px 10px 0 #000, inset 0 0 30px -15px #037050;
}

.win-bar__link:active {
  transform: translateY(5px);
  box-shadow: 0 0 10px 0 #000, inset 0 0 40px -5px #037050;
}
</style>
