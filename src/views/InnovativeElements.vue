<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

  <SmartMultiInput title="Title 1"/>
  <p><b>Logo Idea: </b>C that is rotated 90deg to the right
    Shaded dark to light top to bottom
    Circle with line going down in the middle</p>
    
  </div>
</template>

<script>
import SmartMultiInput from '@/components/SmartMultiInput.vue'

export default {
  name: 'InnovativeElements',
  props: {
    
  },
  components: {
    SmartMultiInput
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
