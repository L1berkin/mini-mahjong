<template>
  <div id="app">
    <main-header />
    <wrapper>
      <router-view/>
    </wrapper>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import Wrapper from './components/hoc/Wrapper.vue'

export default {
  components: { MainHeader, Wrapper },
  name: 'App',
}
</script>

<style>
@import './assets/styles/main.css';
</style>
