<template>
  <div class="app">
    <MainPages/>
    <h2>Explore</h2>
    <hr/>
    <TileView/>
  </div>
</template>

<script>
import TileView from '@/components/TileView.vue'
import MainPages from '@/components/MainPages.vue'

export default {
  name: 'Home',
  components: {
    TileView,
    MainPages
  }
}
</script>

<style scoped>
.app {
  padding: 2vw;
}

h2{
  text-align: left;
  letter-spacing: 1px;
}



</style>
