<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  padding-top: 60px;
  overflow: hidden;
  background: url('../../assets/table.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
