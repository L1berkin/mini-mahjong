<template>
  <header class="main-header">
    <nav class="main-nav">
      <router-link
        to="/"
        class="main-nav__item"
      >
        Игра
      </router-link>
      <router-link
        to="/results"
        class="main-nav__item"
      >
        Результы
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style scoped>
.main-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 8px 0 #000;
  z-index: 4;
}

.main-nav {
  display: flex;
}

.main-nav__item {
  padding: 0 30px;
  line-height: 60px;
  color: #fff;
  font-weight: bold;
  font-size: 1.4rem;
  transition: .2s;
}

.main-nav__item:hover {
  background: rgba(0, 0, 0, 0.4);
}

.main-nav__item:active {
  color: rgb(240, 222, 222);
  background: rgba(0, 0, 0, 0.2);
}
</style>
