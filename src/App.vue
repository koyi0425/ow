<template>
  <div id="app">
    <!-- <NavigationMenu /> -->
    <router-view />
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';

export default {
  name: 'App',
  components: {
    NavigationMenu
  },
  created() {
    this.$store.dispatch('loadProducts')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
</style>