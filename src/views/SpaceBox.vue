<template>
  <div class="main">
    <fd-button class="returnButton" styling="emphasized" type="light" icon="nav-back" @click="openPage" />
    <div>
      <!-- Idea: https://ifunny.co/fun/31BowYUG7?s=cl -->
      <a-scene> 
        <a-assets>
          <a-asset-item id="grid" src="/3dmodels/pointGrid.obj"></a-asset-item>
        </a-assets>

        <!-- <a-box position="2 2 2" rotation="0 0 0" animation="property: rotation; to: 0 360 0; repeat: indefinite; loop: true; dur: 3000; easing: linear;"></a-box>   -->
        <a-sky color="black"></a-sky>
        <a-obj-model src="#grid" position="0 0 0" rotation="0 0 0" animation="property: rotation; to: 0 360 0; repeat: indefinite; loop: true; dur: 15000; easing: linear;"></a-obj-model>
        <a-entity camera look-controls position="0 5 30"></a-entity>
      </a-scene>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SpaceBox',
  props: {
    
  },
  components: {

  },
  methods: {
    openPage: function() {
      this.$router.push("/");
    }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{

}

.returnButton{
  /* float: left; */
  /* margin: 15px; */
  z-index: 10;
  position: absolute;
  left: 5px;
  top: 5px;
}

.returnButton :hover{
  background-color:black; 
}

</style>
