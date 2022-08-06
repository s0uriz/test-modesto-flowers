<template>
  <label
    class="radio radio__wrap"
    :class="{ 'radio__wrap--disabled': disabled }"
  >
    <input
      class="radio__input"
      type="radio"
      :checked="checked"
      :disabled="disabled"
      :value="inputValue"
      v-model="model"
      name="radio"
    />
    <span class="radio__box"></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "VRadio",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: null,
    inputValue: String,
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  padding-left: 1.6em;
  &__wrap {
    display: block;
    margin: 0.8em 0;
    &--disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  &__input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    // Checked
    &:checked + .radio__box {
      background-color: #b3b3b3;
      background-image: url(~@/assets/check.svg);
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    // Focus
    // &:focus + .radio__box {
    //   box-shadow: 0 0 0 0.1em #4bbdfd;
    // }
  }
  &__box {
    position: absolute;
    margin-left: -1.6em;
    width: 1.1em;
    height: 1.1em;
    border: 0.1em solid #b3b3b3;
    border-radius: 50%;
    background-color: #e6e6e6;
  }
}
</style>
