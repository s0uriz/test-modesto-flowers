<template>
  <header class="header">
    <div class="header-wrap">
      <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Catalog</router-link>
        <router-link to="/about">Tenders</router-link>
        <router-link to="/about">Trade</router-link>
        <router-link to="/about">Web-Shop NL</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  background: #c4c4c4;

  &-wrap {
    width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .logo {
      margin: 8px 95px 8px 0;
    }
    .nav {
      * {
        margin-right: 38px;
        text-decoration: none;
        color: #000;
      }
    }
  }
}
.nav {
  font-size: 16px;
}
</style>
