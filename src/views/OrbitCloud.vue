<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />
    <fd-button class="returnButton" styling="emphasized" type="light" icon="mri-scan" @click="disorganize" />
    

    <h1>Spiral Dots</h1>
    <hr>
    <div class="svgContainer">
      <svg id="AudioVisualSVG" xmlns="http://www.w3.org/2000/svg">
      
        <g :transform="transform">>
          <path 
              fill="none" 
              :stroke-width="strokeWidth"  
              v-for="i in rings" :key="i.ring"
              stroke="white" 
              :d="i.ring" />

          <path 
              fill="none" 
              :stroke-width="strokeWidth+1"  
              v-for="i in ringBreaks" :key="i.ring"
              stroke="black" 
              :d="i.ring">

              <!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform -->
              <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          :from="i.from"
                          :to="i.to"
                          :dur="i.speed"
                          repeatCount="indefinite"/>
          </path>
        </g>

        <!--  path:
                x, y, r, d1, d2, direction
              meaning:
                center (x,y), radius r, degree_start, degree_end, direction -->
      </svg>

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
      ringBreaks:[],
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
      var ring = `M-${d1/2},0 a25,25 0 1,1 ${d1},0 a25,25 0 1,1 -${d1},0`;
      this.rings.push({ring:ring, coords:d1});

      var ringbreak = `M-${d1/2},0 a25,25 0 1,1 ${d1},0`;
      this.ringBreaks.push({ring:ringbreak, coords:d1, speed:"10s", from:0, to:360});

      d1 += 10;
      d2 = d1 +100;
    }


  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    centerSVGData: function(){
      var width = (window.innerWidth*.9)/2;
      var height = (screen.height*.7)/2;
      this.transform = `translate(${width},${height})`;
    },

    disorganize: function(){
      for(var i=0; i<this.ringBreaks.length;i++){

        //Speed
        var rand = Math.floor(Math.random() * 15)+1.5;
        this.ringBreaks[i].speed = rand+"s";

        //Direction
        rand = Math.floor(Math.random() * 2);
        if(rand == 0){
          this.ringBreaks[i].from = 0;
          this.ringBreaks[i].to = 360;
        }else{
          this.ringBreaks[i].from = 360;
          this.ringBreaks[i].to = 0;
        }
        
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
  right: 10px;
  top: 10px;
  transform: scale(2);
}


.content{
  margin:30px;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
}


.svgContainer{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

#AudioVisualSVG{
  width: 90vw; 
  height:90vh;
  
}



</style>
