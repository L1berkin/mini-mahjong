<template>
  <section class="timer">
    <p class="timer__title">
      Прошло<br>
      {{time}}
    </p>
  </section>
</template>

<script>
export default {
  name: 'GameTimer',
  data() {
    return {
      counterSeconds: 0,
      timer: null,
    }
  },
  computed: {
    time() {
      if (this.counterSeconds > 60) {
        const minutes = Math.floor(this.counterSeconds / 60)
        const seconds = this.counterSeconds - minutes * 60
        return `
          ${minutes < 10 ? `0${minutes}` : minutes}
          :
          ${seconds < 10 ? `0${seconds}` : seconds}
        `
      }
      return `00:${this.counterSeconds < 10 ? `0${this.counterSeconds}` : this.counterSeconds}`
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
        this.counterSeconds += 1
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
