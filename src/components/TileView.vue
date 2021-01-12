<template>
  <div class="main">
    <Tile v-for="i in tiles" 
      :key="i.title" 
      :title="i.title" 
      :subTitle="i.subTitle" 
      :icon="i.icon" 
      :footer="i.footer" 
      :pageName="i.pageName"
      :production="i.production"/>
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
  data(){
    return{
      tiles:[
        {title:"About", subTitle:"Overview of the Site", footer:"Creativity, Invention",              pageName:"about", production:true, icon:""},
        {title:"Home Made", subTitle:"Projects From Home", footer:"Physical Projects",                pageName:"homeMade", production:false, icon:""},
        {title:"Spacial Boxes", subTitle:"Rotating 3D Grid of Cubes", footer:"A-Frame",               pageName:"spaceBox", production:true, icon:""}, //https://ifunny.co/fun/31BowYUG7?s=cl
        {title:"Orbit Cloud", subTitle:"Randomized Rotating Rings", footer:"SVG, Animation",          pageName:"orbitCloud", production:true, icon:""},
        {title:"Spiral Dots", subTitle:"Rotating Circles Connected Together", footer:"SVG, Tracing",  pageName:"spiralDots", production:false, icon:""},
        {title:"Flying Game", subTitle:"Navigate Your Ship Past Obstacles", footer:"SVG",             pageName:"flyingGame", production:false, icon:""},
        {title:"Lava Laptop", subTitle:"Lava Lamp Simulation", footer:"SVG",                          pageName:"lavaLamp", production:false, icon:""},
        {title:"Audio Visuals", subTitle:"Analyzes Audio and Creates Visual Orb", footer:"SVG, FFT",  pageName:"audioVisuals", production:false, icon:""},
        {title:"Crack Generator", subTitle:"Dynamically Creates Cracks", footer:"iFunny",             pageName:"crackGenerator", production:false, icon:""},
        // {title:"Messaging", subTitle:"Websocket and REST Examples", footer:"",                        pageName:"websocketrest", production:false, icon:""},
        // {title:"", subTitle:"", footer:"", pageName:"", production:"", icon:""},
     
      ],

    }
  },
  mounted(){
    if (window.location.href.indexOf("localhost") <= -1) {
      for(let i in this.tiles){
        if(this.tiles[i].prodStatus == false){
          this.tiles.splice(i,1)
        }
      }
    }
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
  padding: 20px 0px 20px 12px;
}

</style>
