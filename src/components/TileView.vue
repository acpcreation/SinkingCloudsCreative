<template>
  <div class="main">
    <Tile title="About" subTitle="Overview of the Site" icon="" footer="Creativity, Invention" pageName="about"/>
    <Tile title="Home Made" subTitle="Projects From Home" icon="" footer="Physical Projects" pageName="homeMade"/>
    <Tile title="Spacial Boxes" subTitle="Rotating 3D Grid of Cubes" icon="" footer="A-Frame" pageName="spaceBox"/> <!--https://ifunny.co/fun/31BowYUG7?s=cl-->
    <Tile title="Orbit Cloud" subTitle="Randomized Rotating Rings" icon="" footer="SVG, Animation" pageName="orbitCloud"/>
    <Tile title="Spiral Dots" subTitle="Rotating Circles Connected Together" icon="" footer="SVG, Tracing" pageName="spiralDots"/>
    <Tile title="Flying Game" subTitle="Navigate Your Ship Past Obstacles" icon="" footer="SVG" pageName="flyingGame"/>
    <!-- <Tile title="Lava Laptop" subTitle="Lava Lamp Simulation" icon="" footer="SVG" pageName="lavaLamp"/> -->
    <!-- <Tile title="Audio Visuals" subTitle="Analyzes Audio and Creates Visual Orb" icon="" footer="SVG, FFT" pageName="audioVisuals"/> -->
    
    <!-- <Tile title="Crack Generator" subTitle="Dynamically Creates Cracks" icon="" footer="iFunny*" pageName="crackGenerator"/> -->
    <!-- <Tile title="Messaging" subTitle="Websocket and REST Examples" icon="" footer="Vue.js" pageName="websocketrest"/> -->

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
  justify-content:left;
  padding: 20px 10px 0px 12px;
}

</style>
