<template>
  <section class="table">
    table
  </section>
</template>

<script>
export default {
  name: 'TableResults',
}
</script>

<style scoped>
.table {
  width: 80%;
  max-width: 700px;
  height: 400px;
  margin-top: 50px;
  padding: 10px 20px;
  background: #ffdeb1;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 #000, inset 0 0 20px 0 #fff2e0;
  transform: translateY(-150%);
  animation: slideDown .6s ease-in-out 0s forwards 1;
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
