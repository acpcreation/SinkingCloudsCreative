<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

  <SmartMultiInput title="Title 1"/>
    
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
