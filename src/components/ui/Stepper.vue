<template>
  <div class="stepper-wrap">
    <div
      class="progress"
      :style="`width: ${(current / (steps - 1)) * 100}%`"
    ></div>
    <div
      class="item"
      v-for="(step, i) in steps"
      :key="i"
      :class="{ 'item-completed': current === i || current > i }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    steps: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.stepper {
  &-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 3px;
      background-color: #b3b3b3;
      position: absolute;
      z-index: -2;
    }

    .progress {
      width: 0;
      height: 3px;
      background-color: #4bbbfa;
      position: absolute;
      z-index: -1;
    }

    .item {
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background: #c4c4c4;
      border: 2px solid #b3b3b3;
      &-completed {
        background: #8cd6ff;
        border: 2px solid #4bbbfa;
      }
    }
  }
}
</style>
