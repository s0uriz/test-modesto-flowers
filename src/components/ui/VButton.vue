<template>
  <button class="btn" :disabled="disabled" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 133px;
  height: 40px;
  background: #4bbdfd;
  border-radius: 5px;
  box-shadow: none;
  border: 0;
  color: white;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;
}
.btn:disabled,
.btn[disabled] {
  background-color: #87d0fa;
  cursor: not-allowed;
}
</style>
