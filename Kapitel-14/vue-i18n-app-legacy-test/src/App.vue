<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/i18n">i18n</router-link>

    <div>
      <LocaleSwitcher />
    </div>
  </div>
  <router-view />
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

export default {
  components: { LocaleSwitcher },
  mounted() {
    document.dir = "rtl";
    document.documentElement.lang = "en";
    document.title = this.$t("title");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
