<template>
  <button
    class="base-btn"
    :style="styles"
    @click.stop="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    styles: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.base-btn {
  padding: 10px 20px;
  transition: .2s;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #323e3b;
  box-shadow: 0 5px 10px 0 #000, inset 0 0 20px -15px #037050;
}

.base-btn:hover {
  box-shadow: 0 5px 10px 0 #000, inset 0 0 30px -15px #037050;
}

.base-btn:active {
  transform: translateY(5px);
  box-shadow: 0 0 10px 0 #000, inset 0 0 20px -5px #037050;
}
</style>
