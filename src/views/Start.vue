<template>
  <div class="start-page">
    <rules-bar />
    <router-link
      class="start-link"
      to="/game"
    >
      Начать игру
    </router-link>
  </div>
</template>

<script>
import RulesBar from '../components/RulesBar.vue';

export default {
  name: 'Start',
  components: { RulesBar },
};
</script>

<style scoped>
.start-page {
  min-height: 600px;
  text-align: center;
}

.start-link {
  display: inline-block;
  margin-top: 50px;
  padding: 20px 30px;
  font-size: 2rem;
  transition: .2s;
  color: #000;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #323e3b;
  background: #fff;
  box-shadow: 0 5px 10px 0 #000, inset 0 0 20px -15px #037050;
}

.start-link:hover {
  box-shadow: 0 5px 10px 0 #000, inset 0 0 30px -15px #037050;
}

.start-link:active {
  transform: translateY(5px);
  box-shadow: 0 0 10px 0 #000, inset 0 0 40px -5px #037050;
}
</style>
