<template>
  <button :class="[button, type]" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      button: 'button',
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.button {
  font-size: 1.4em;
  width: 8em;
  padding: 0.4em 0;
  cursor: pointer;
  border: none;
  color: #8483a6;
  background: #f8f8f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

.submit {
  background-color: #eae337;
}

.cancel {
}
</style>
