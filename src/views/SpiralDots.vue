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
      <svg id="SpiralDotsSVG" xmlns="http://www.w3.org/2000/svg">

        <circle 
          r="6" 
          :cx="center.x" 
          :cy="center.y"
          style="fill:white;"/>

        <circle 
          v-for="i in dots"
          :key="i.id"
          :ref="i.id"
          r="6" 
          :cx="center.x" 
          :cy="center.y"
          style="fill:white;">
        
         <animateMotion 
          :dur="i.time" 
          repeatCount="indefinite"
          :path="i.path"/>
        </circle>
      </svg>
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
      },
      dots:[]
      
    }
  },

  mounted() {
    this.centerSVGData();
    this.calculateRotationPath();
    this.connectTheDots();

  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    centerSVGData: function(){
      var width = (screen.width*.90)/2;
      var height = (screen.height)/2;
      this.center = {
        x:width,
        y:height
      }
    },

    calculateRotationPath: function(){
      // let path = "M-75,0 a25,25 0 1,1 150,0 a25,25 0 1,1 -150,0";
      let total  = 10;

      for(let i=1; i<=total ;i++){
        let di =  50 * i;
        let time = 2+(i/5);

        let item = {
          id:"dot"+i,
          time: time+"s",
          diameter: di,
          path: `M-${di},0 a25,25 0 1,1 ${di*2},0 a25,25 0 1,1 -${di*2},0`
        }
        this.dots.push(item)
      }      
    },

    connectTheDots: function(){
      // let that = this;
      // setInterval(function(){
        // for(let i=1; i<= that.dots.length ;i++){
          // let element = document.getElementById('dot'+i)
          // console.log(element)

        //   let element = that.$refs["dot"+i];
        //   console.log(element)
          
        // }
        // console.log(that.$refs)

      // }, 3000);
    },





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

#SpiralDotsSVG{
  width: 90vw; 
  height:100vh;
  background-color: rgba(17, 39, 63, 0.664);
}



</style>
