<template>
  <div class="main">

    <svg class="gameSVG" xmlns="http://www.w3.org/2000/svg">
      <circle 
        r="4" 
        :cx="xCoords" 
        :cy="yCoords"
        style="fill:white;">
      </circle>

      <rect width="50" height="50" 
        style="fill:white;stroke-width:3;stroke:white;">
        <animateMotion
            path="M10,100 400,400 600,100 800,400 1000,100 800,500 600,200 400,500 10,100"
            begin="0s" dur="10s" repeatCount="indefinite"/>
          <!-- <animateTransform 
          attributeName="transform"
          type="rotate"
          from="0 100"
          to="360 100"
          dur="3s"
          repeatCount="indefinite"/> -->
        </rect>
    </svg>
    
    <!-- https://jsfiddle.net/Herteby/x53494ef/ -->
    <table id="controlPad">
        <tr>
          <td></td>
          <td style="margin:0px 50px;"><b-button 
            @mousedown="move('up')" 
            @mouseleave="stop()" 
            @mouseup="stop()" 
            @touchstart="move('up')" 
            @touchend="stop()" 
            @touchcancel="stop()"
            size="lg"
            style="transform: rotate(90deg);" >&lt;</b-button ></td>
          <td></td>
        </tr>
        <tr>
          <td><b-button
            @mousedown="move('left')" 
            @mouseleave="stop()" 
            @mouseup="stop()" 
            @touchstart="move('left')" 
            @touchend="stop()" 
            @touchcancel="stop()"
            size="lg"> &lt; </b-button ></td>
          <td></td>
          <td><b-button
            @mousedown="move('right')" 
            @mouseleave="stop()" 
            @mouseup="stop()" 
            @touchstart="move('right')" 
            @touchend="stop()" 
            @touchcancel="stop()"
            size="lg"> &gt; </b-button ></td>
        </tr>
        <tr>
          <td></td>
          <td><b-button 
            @mousedown="move('down')" 
            @mouseleave="stop()" 
            @mouseup="stop()" 
            @touchstart="move('down')" 
            @touchend="stop()" 
            @touchcancel="stop()"
            size="lg"
            style="transform: rotate(90deg);">&gt;</b-button ></td>
          <td></td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FlyingGame',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      xCoords: 0, 
      yCoords: 0,
      interval: false,
      hat: 0,
      enemyBots:[]
    }
  },

  mounted() {
    this.xCoords = screen.width/2;
    this.yCoords = screen.height/2;
  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    move: function(e){
      if(!this.interval){
        this.interval = setInterval(() => this.changeDirection(e), 1)	
      }
    },

    stop: function(){
      clearInterval(this.interval)
      this.interval = false
    },

    changeDirection: function(e){
      //console.log(e);
      let unit = 1;
      switch (e){
        case "up":
          this.yCoords -= unit;
          break;
        case "down":
          this.yCoords += unit;
          break;
        case "right":
          this.xCoords += unit;
          break;
        case "left":
          this.xCoords -= unit;
          break;
      }

      if(this.xCoords < 5){
        this.xCoords = 5;
      }else if(this.xCoords > screen.width-5){
        this.xCoords = screen.width-5;
      }

      let height = screen.height * .8;
      if(this.yCoords < 5){
        this.yCoords = 5;
      }else if(this.yCoords > height-5){
        this.yCoords = height-5;
      }

      // console.log(this.xCoords+","+this.yCoords)
    },

    generateEnemyBots: function(){

    }







  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{

}

#controlPad {
  position:fixed;
  bottom: 1vh;
  left: 50%;
  transform: translate(-50%, 0%);
}

.gameSVG{
  width: 100vw; 
  border-radius: 10px;
  background-color: black;
  height:80vh;
}



</style>
