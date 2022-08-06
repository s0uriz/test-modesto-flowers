<template>
  <label
    class="check check__wrap"
    :class="{ 'check__wrap--disabled': disabled }"
  >
    <input
      class="check__input"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      :value="inputValue"
      v-model="model"
    />
    <span class="check__box"></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "VCheckbox",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: Array,
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
.check {
  padding-left: 1.6em;
  font-size: 12px;
  &__wrap {
    display: block;
    margin: 1.3em 0;
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
    &:checked + .check__box {
      background-color: #b3b3b3;
      background-image: url(~@/assets/check.svg);
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    // Focus
    // &:focus + .check__box {
    //   box-shadow: 0 0 0 0.1em #4bbdfd;
    // }
  }
  &__box {
    position: absolute;
    margin-left: -1.6em;
    width: 1.1em;
    height: 1.1em;
    border: 0.1em solid #b3b3b3;
    border-radius: 0.15em;
    background-color: #e6e6e6;
  }
}
</style>
