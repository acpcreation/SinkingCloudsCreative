<template>
  <div class="main">
    <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" />
    <h1>Music</h1>
    <hr>


  </div>
</template>

<script>
export default {
  name: 'Music',
  props: {
    
  },
  components: {

  },
  data(){
    return{
  
    }
  },

  mounted() {
    


  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },




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

</style>
