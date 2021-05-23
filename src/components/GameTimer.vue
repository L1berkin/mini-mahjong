<template>
  <section class="timer">
    <p class="timer__title">
      Прошло<br>
      {{time}}
    </p>
  </section>
</template>

<script>
import { ADD_SECOND } from '../store/actions'

export default {
  name: 'GameTimer',
  data() {
    return {
      timer: null,
    }
  },
  computed: {
    time() {
      return this.$store.getters.normalTime
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.$store.dispatch(ADD_SECOND)
      }, 1000)
    },
  },
}
</script>

<style scoped>
.timer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.timer__title {
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 2.5rem;
}
</style>
