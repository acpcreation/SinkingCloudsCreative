<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />
    <h1>Contact</h1>
    <hr>
    <br><br>
    <p>Hello, I'm so glad you found this page!</p>
    <p>You might be hoping to get in contact with me for some reason or other.</p>
    <p>If you would like to get in contact with me, please use one of the options below to reach out.</p>

    <div class="details">
      <p>[ Email: sinkingcloudsband@gmail.com ]</p>
      <p>[ Intagram: <a>sinkingcloudscreative ]</a></p>
      <!-- <p> <a></a></p> -->
    </div>

    <p>Hope to hear from you soon!</p>
    
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'Contact',
  props: {
    
  },
  components: {
    Footer
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
  padding: 2vh 2vw;
}

p{
  color: white;
  font-size: 14px;
  text-align: center;
}

.details{
  margin: 50px auto;
}

.details p{
  font-size: 22px;
}




</style>
