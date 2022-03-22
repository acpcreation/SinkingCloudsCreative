<template>
  <div class="app">
    <p class="contact" @click="openPage('contact')">Contact</p>
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
  },

  methods: {
    openPage: function(e) {
      this.$router.push("/"+e);
    },

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

.contact{
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
}

.contact:hover{
  cursor: pointer;
  text-decoration: underline;
}



</style>
