<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Spiral Dots</h1>
    <hr>
    <div class="svgContainer">
      <svg id="AudioVisualSVG" xmlns="http://www.w3.org/2000/svg">
        
        <!-- <circle id="avCircle" r="150" cx="250" cy="250" 
                fill="url(#Gradient3)"
                @click="updateCircle"/> -->
                <!-- :style="avCircleColor"  -->

        <g :transform="transform">
          <!-- <path fill="none" stroke="white" :stroke-width="strokeWidth" d="M20,0 a20,20 0 0,1 20,20" /> -->
          <!-- <path fill="none" stroke="black" :stroke-width="strokeWidth" d="M20,0 a20,20 0 1,0 20,20" /> -->

          <!-- <path fill="none" stroke="white" :stroke-width="strokeWidth" 
              d="M-50,50
                  a 25,25 0 1,1 100,0
                  a 25,25 0 1,1 -100,0" /> -->

          <path 
              fill="none" 
              :stroke-width="strokeWidth"  
              v-for="i in rings" :key="i.ring"
              stroke="white" 
              :d="i.ring" />
        </g>

        <!--  path:
                x, y, r, d1, d2, direction
              meaning:
                center (x,y), radius r, degree_start, degree_end, direction -->
      </svg>
      
      <!-- <img id="AudioVisualSVG" src="/AudioVisual.svg"/> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'OrbitCloud',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      strokeWidth:4,
      rings:[],
      transform:"translate(250,250)"

    }
  },

  mounted() {
    this.centerSVGData();
    
    var d1 = 50;
    var d2 = 70;
    for(var i=0;i<12;i++){
      // var o = d1
      d1 = Math.floor(Math.random() * (d2-d1)) + d1;
      // console.log(o+" < "+ d1+" < "+d2)
      var ring = `M-${d1/2},0 a25,25 0 1,1 ${d1},0 a25,25 0 1,1 -${d1},0`
      this.rings.push({ring:ring, coords:d1});

      d1 += 10;
      d2 = d1 +100;
    }


  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    centerSVGData: function(){
      var width = (screen.width*.70)/2;
      var height = (screen.height*.75)/2;
      this.transform = `translate(${width},${height})`;
    }






  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  padding: 60px;
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

/* .svgContainer img{
  width: 20vw;
} */



</style>
