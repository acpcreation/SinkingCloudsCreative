<template>
  <div>
    <h1>ICON</h1>
    <svg
      height="100"
      width="100"
      viewBox="0 0 100 100"
      style="background-color: rgba(17, 39, 63, 0.664); border-radius:8px; transform: rotate(270deg);">

      <!-- <polyline :points="initialCoordinatePath"
                :fill="fillColor" stroke="none" /> -->

     <path  v-for="i in coordinates" 
            :key="i" 
            :d="i" 
            :stroke-width="strokeWidth" 
            :stroke="strokeColor" 
            stroke-linecap="round"/>
     
     </svg>
  </div>
</template>

<script>
export default {
  name: "AudioFlavorIcon",
  props: {},
  data() {
    return {
      sides: 36,
      radius: 28,
      center:{
        x:50,
        y:50
      },
      // initialCoordinatePath:"",
      oscillationDepth:[3, 5, 5, 20, 10, 10, 10, 5, 5, 5, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      coordinates:[],
      fillColor:"none",
      strokeColor:"green",
      strokeWidth:2.5
    };
  },
  mounted() {
    let coords = this.plotPolygon(this.radius, this.center, this.sides)
    // this.initialCoordinatePath = this.convertToSVGString(coords)
    let archs = this.plotArches(this.radius, this.center, this.sides, this.oscillationDepth)
    this.secondCoordinatePath = this.convertToSVGString(archs)
    this.coordinates = this.convertToSVGArchStringArray(coords, archs)
  },
  methods: {
    plotPolygon: function (r,c,s) {
      // TUTORIAL: https://www.youtube.com/watch?v=_qdnyw5Eb_Y
      let coords = []
      for(let i=1; i<=s ;i++){
        let x = r * Math.cos((i*2*Math.PI)/s)+c.x
        let y = r * Math.sin((i*2*Math.PI)/s)+c.y
        // console.log(x+", "+y)
        coords.push({
          x: x,
          y: y
        })
      }
      return coords
    },

    plotArches: function (r,c,s,osc) {
      let coords = []
      s = s*2
      let adjustedOsc = []
      for(let i=0; i<osc.length ;i++){
        adjustedOsc.push(osc[i])
        adjustedOsc.push(osc[i])
        adjustedOsc.push(-osc[i])
        adjustedOsc.push(-osc[i])
      } 
      osc = adjustedOsc
      for(let i=1; i<=s ;i++){
        let nr = r+osc[i]
        let x = nr * Math.cos((i*2*Math.PI)/s)+c.x
        let y = nr * Math.sin((i*2*Math.PI)/s)+c.y
        if(i%2 == 1){
          coords.push({
            x: x,
            y: y
          })
        }
      }
      return coords
    },

    convertToSVGString: function (arr) {
      let coordString= ""
      for(let i=0; i<arr.length ;i++){
        coordString += arr[i].x+","+arr[i].y+" "
      }
      coordString += arr[0].x+","+arr[0].y
      return coordString
    },

    convertToSVGArchStringArray: function (coords, archs) {
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
      let returnArray = []
      coords = coords.reverse();
      archs = archs.reverse();
      for(let i=0; i<coords.length ;i++){
        let archString = "M "+coords[i].x+" "+coords[i].y
        archString += " Q "+archs[i].x+" "+archs[i].y

        if(i<coords.length-1){
          archString += " "+coords[i+1].x+" "+coords[i+1].y
        }else{
          archString += " "+coords[0].x+" "+coords[0].y
        }
        // console.log(archString)
        returnArray.push(archString)
      }
      return returnArray
    }

  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
