<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Audio Visuals</h1>
    <hr>
    <div class="content">
      <p>This is a nifty app which analyzies an audio file and generates an image which reflects the vibe of the song. This tool uses:</p>
      <p>SVG image manipulation</p>
      <p>Image is split into quadrants. Quadrants represent section of a song. </p>
      <p>Colors: Yellow = Happy, Blue = Sad, Red = Angry</p>
      <p>Spikes/waves circling the outside of the image. Frequency represents energy of the song.</p>
      <p>Exports as emoji type</p>
    </div>

    <div class="svgContainer">
      <svg id="AudioVisualSVG" xmlns="http://www.w3.org/2000/svg" style="width: 500; height:500;">
        <defs>
          <linearGradient id="Gradient1" x1="1" x2="0" y1="1" y2="0">
            <stop offset="0%" :stop-color="gradientCenter"/>
            <stop :offset="gradientDiameter" :stop-color="gradient[0]"/>
            <stop offset="100%" :stop-color="gradient[0]"/>
          </linearGradient>
          <linearGradient id="Gradient2" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" :stop-color="gradientCenter"/>
            <stop :offset="gradientDiameter" :stop-color="gradient[1]"/>
            <stop offset="100%" :stop-color="gradient[1]"/>
          </linearGradient>
          <linearGradient id="Gradient3" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" :stop-color="gradientCenter"/>
            <stop :offset="gradientDiameter" :stop-color="gradient[2]"/>
            <stop offset="100%" :stop-color="gradient[2]"/>
          </linearGradient>
          <linearGradient id="Gradient4" x1="1" x2="0" y1="0" y2="1">
            <stop offset="0%" :stop-color="gradientCenter"/>
            <stop :offset="gradientDiameter" :stop-color="gradient[3]"/>
            <stop offset="100%" :stop-color="gradient[3]"/>
          </linearGradient>
        </defs>
        <!-- <circle id="avCircle" r="150" cx="250" cy="250" 
                fill="url(#Gradient3)"
                @click="updateCircle"/> -->
                <!-- :style="avCircleColor"  -->

        <g transform="translate(250,250)">
          <path d="M0,0 L-200,0 A200,200 0 0,1 0,-200 z" fill="url(#Gradient1)"/>
          <path d="M0,0 L0,-200 A200,200 0 0,1 200,000 z" fill="url(#Gradient2)"/>
          <path d="M0,0 L200,0 A200,200 0 0,1 0,200 z" fill="url(#Gradient3)"/>
          <path d="M0,0 L0,200 A200,200 0 0,1 -200,0 z" fill="url(#Gradient4)"/>
        </g>
      </svg>
      
      <!-- <img id="AudioVisualSVG" src="/AudioVisual.svg"/> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'AudioVisuals',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      blue: "rgb(32, 95, 230)",
      yellow: "rgb(241, 207, 56)",
      red: "rgb(241, 56, 56)",
      avCircleColor: "fill: green;",
      gradientDiameter: "60%",
      gradientCenter: "",
      gradient:[],
      
      

    }
  },

  mounted() {
    this.gradientCenter = this.yellow;
    this.gradient = [this.blue, this.blue, this.blue, this.blue];


  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    updateCircle: function(){
      console.log(0);
      this.avCircleColor = "fill:yellow;"
    }




  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  padding: 2vh 5vw;
}

.returnButton{
  /* float: left; */
  /* margin: 15px; */
  z-index: 10;
  position: absolute;
  left: 5px;
  top: 5px;
}

.content{
  margin:30px;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  color: rgb(241, 56, 56);
}


.svgContainer{
  display: flex;
  justify-content: center;
}

.svgContainer img{
  width: 20vw;
}



</style>
