<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;

  background-image:
    linear-gradient(to bottom, rgba(22, 22, 22, 0.85),rgba(0, 0, 0, 0.85)), 
    url('./assets/mountains.jpg'); 
}

a{
  cursor: pointer;
}

</style>
