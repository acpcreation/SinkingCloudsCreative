<template>
  <div class="app">
    <MainPages/>
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
  padding-top: 30px;
}

</style>
