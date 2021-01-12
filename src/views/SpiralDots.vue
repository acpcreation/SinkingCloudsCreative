<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Spiral Dots</h1>
    <hr>
    <div class="content">
      <p>https://ifunny.co/fun/Ua6zFELw7?s=cl </p>

    </div>
    

    <div class="svgContainer">
      <svg id="AudioVisualSVG" xmlns="http://www.w3.org/2000/svg">

        <circle 
          id="avCircle" 
          r="10" 
          :cx="center.x" 
          :cy="center.y"
          style="fill:black;">
        
         <animateMotion 
          dur="2s" 
          repeatCount="indefinite"
          path="M-100,0 a25,25 0 1,1 200,0 a25,25 0 1,1 -200,0"/>
        </circle>
      </svg>
      
      <!-- <img id="AudioVisualSVG" src="/AudioVisual.svg"/> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'SpiralDots',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      center: {
        x:0,
        y:0
      }
      
      

    }
  },

  mounted() {
    this.centerSVGData();


  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    centerSVGData: function(){
      var width = (screen.width*.65)/2;
      var height = (screen.height*.60)/2;
      this.center = {
        x:width,
        y:height
      }
    }





  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  padding: 5vw;
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

#AudioVisualSVG{
  width: 90vw; 
  height:90vh;
}



</style>
