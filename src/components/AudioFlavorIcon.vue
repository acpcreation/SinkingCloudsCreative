<template>
  <div>
    <h1>ICON</h1>
    <svg
      height="100"
      width="100"
      viewBox="0 0 100 100"
      style="background-color: rgba(17, 39, 63, 0.664); border-radius: 5px">

      <polyline :points="coordinatePath"
                style="fill:navy;stroke:black;stroke-width:2" />
    <!--       (X1 Y1)              (X1 Y1) -->
    <!-- <path d=" M 10 10 
              C 20 50, 
                40 50,         
              50 10" stroke="black" fill="transparent"/>    -->
     </svg>
  </div>
</template>

<script>
export default {
  name: "AudioFlavorIcon",
  props: {},
  data() {
    return {
      sides: 20,
      radius: 50,
      center:{
        x:50,
        y:50
      },
      coordinatePath:""
    };
  },
  mounted() {
    // TUTORIAL: https://www.youtube.com/watch?v=_qdnyw5Eb_Y
    let r = this.radius;
    let c = this.center;
    let s = this.sides;
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

    this.coordinatePath = ""
    for(let i=0; i<coords.length ;i++){
      this.coordinatePath += coords[i].x+","+coords[i].y+" "
    }
    this.coordinatePath += coords[0].x+","+coords[0].y
    // console.log("PATH: "+this.coordinatePath)

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
