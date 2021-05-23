<template>
  <div class="modal">
    <p class="modal__title">
      Вы не закончили прошлую игру, желаете продолжить?
    </p>
    <div class="modal__btns">
      <base-button
      class="modal__btn"
      @click="$emit('click', true)"
    >
      Да
    </base-button>
    <base-button
      class="modal__btn"
      @click="$emit('click', false)"
    >
      Нет
    </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components: { BaseButton },
  name: 'BaseModal',
}
</script>

<style scoped>
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 500px;
  min-height: 300px;
  padding: 15px;
  background: #fff;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px 0 #000, inset 0 0 20px 0 #037050;
  z-index: 5;
  animation: initial .6s ease-in-out 0s forwards 1;
}

.modal__title {
  font-size: 1.2rem;
  text-align: center;
  padding: 10px 0;
  margin-top: 50px;
}

.modal__btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.modal__btn {
  margin: 0 20px;
}

@keyframes initial {
  0% {
    transform: translate(-50%, -1000px);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
