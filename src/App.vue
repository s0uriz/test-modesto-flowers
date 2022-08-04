<template>
  <div id="app">
    <the-header></the-header>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
