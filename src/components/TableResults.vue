<template>
  <section class="table">
    <h2 class="table__title">
      Таблица результатов
    </h2>
    <p
      v-if="!results.length"
      class="table__no-results"
    >
      Вы не сыграли еще ни одной игры
    </p>
    <ul
      v-else
      class="results-list"
    >
      <li class="results-list__item">
        <p class="results-list__title">
          Номер
        </p>
        <p class="results-list__title">
          Дата
        </p>
        <p class="results-list__title">
          Время
        </p>
      </li>
      <li
        v-for="(el, index) in results"
        :key="index"
        class="results-list__item"
      >
        <p class="results-list__element">
          {{ index + 1 }}
        </p>
        <p class="results-list__element">
          {{ getNormalDate(el.date) }}
        </p>
        <p class="results-list__element">
          {{ el.time }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TableResults',
  data() {
    return {
      results: [],
    }
  },
  mounted() {
    this.getResults()
  },
  methods: {
    getResults() {
      const res = JSON.parse(localStorage.getItem('results'))
      if (res) {
        this.results = res.data
      }
    },
    getNormalDate(date) {
      const arr = date.split('-')
      const day = arr[2].split('T')[0]
      return `${arr[0]}:${arr[1]}:${day}`
    },
  },
}
</script>

<style scoped>
.table {
  width: 80%;
  max-width: 700px;
  height: 400px;
  margin-top: 50px;
  background: #ffdeb1;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 #000, inset 0 0 20px 0 #fff2e0;
  transform: translateY(-150%);
  animation: slideDown .6s ease-in-out 0s forwards 1;
}

.table__title {
  padding: 10px 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 3px solid #037050;
}

.table__no-results {
  padding: 0 15px;
  margin-top: 100px;
  text-align: center;
  color: #5e5e5e;
  font-size: 1.1rem;
}

.results-list__item {
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
}

.results-list__title {
  font-weight: bold;
}

.results-list__element {
  min-width: 90px;
  text-align: center;
}

@keyframes slideDown {
  0% {
    transform: translateY(-150%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
