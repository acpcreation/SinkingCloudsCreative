<template>
  <div class="app">
    <TileView/>
  </div>
</template>

<script>
import TileView from '@/components/TileView.vue'

export default {
  name: 'Home',
  components: {
    TileView
  }
}
</script>

<style scoped>
.app {
  padding-top: 30px;
}

</style>
