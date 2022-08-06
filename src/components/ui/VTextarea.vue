<template>
  <textarea
    :value="modelValue"
    @input="$emit('input', $event.target.value)"
    :rows="rows"
    class="textarea"
  />
</template>

<script>
export default {
  name: "VTeaxtarea",
  props: {
    rows: {
      type: Number,
      default: 5,
    },
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  background: #e6e6e6;
  border: 2px solid #b3b3b3;
  border-radius: 5px;
  &:focus {
    border: 2px solid #b3b3b3;
    outline: none !important;
  }
}
</style>
