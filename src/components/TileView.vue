<template>
  <div class="main">
    <Tile title="About" subTitle="Overview of site" icon="..." footer="Creativity, Invention" pageName="aboutHome"/>
    <Tile title="Space Box" subTitle="Rotating spacial cube" icon="..." footer="A-Frame" pageName="spaceBox"/> <!--https://ifunny.co/fun/31BowYUG7?s=cl-->
    <Tile title="Spiral Dots" subTitle="https://ifunny.co/fun/Ua6zFELw7?s=cl" icon="..." footer="SVG" pageName="spiralDots"/>
    <Tile title="Orbit Cloud" subTitle="Slow rotating rings" icon="..." footer="SVG, Animation" pageName="orbitCloud"/>
    <Tile title="Audio Visuals" subTitle="Analyzes audio, creates visual orb" icon="..." footer="SVG, FFT" pageName="audioVisuals"/>
    <Tile title="Crack Generator" subTitle="Dynamically creates cracks" icon="..." footer="iFunny*" pageName="crackGenerator"/>
    <!-- <Tile title="Messaging" subTitle="Websocket and REST Examples" icon="..." footer="Vue.js" pageName="websocketrest"/>
    <Tile title="HANA" subTitle="Querying SAP HANA Express Edition" icon="..." footer="Node.js" pageName="hana"/> -->

  </div>
</template>

<script>
import Tile from './Tile.vue'

export default {
  name: 'TileView',
  props: {
    
  },
  components: {
    Tile
  },
  methods: {
  
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  padding: 20px 10px 0px 12px;
}

</style>
