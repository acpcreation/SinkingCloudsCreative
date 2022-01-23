<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

    
  </div>
</template>

<script>
export default {
  name: 'Template',
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
  padding: 2vh 5vw;
}


</style>
