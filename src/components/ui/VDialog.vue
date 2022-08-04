<template>
  <div class="dialog-wrap" @click="$emit('close')">
    <div class="dialog-content" @click.stop>
      <span class="close" @click="$emit('close')">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VDialog",
};
</script>

<style lang="scss" scoped>
.dialog {
  &-wrap {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);
  }
  &-content {
    background: #f5f5f5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px 40px;

    .close {
      font-size: 23px;
      line-height: 14px;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
