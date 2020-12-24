<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Music</h1>
    <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:4r7feOEp4TzUoOnhMC8TiD?si=xyepozaYQsGUWddUSbPllw&size=detail&theme=dark" 
            width="300" 
            height="56" 
            scrolling="no" 
            frameborder="0"  
            allowtransparency="true"
            class="artistIcon"></iframe>
    <hr>

    <div class="musicPlayer">
      <iframe src="https://open.spotify.com/embed/playlist/5yocavrDHM16RzQe3qdcgz" 
            width="50%" 
            height="80%" 
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media"
            class="mediaPlayer"></iframe>
    </div>
    <!-- https://developer.spotify.com/documentation/widgets/ -->

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

.musicPlayer{
  margin-top:25px;
  display:flex;
  justify-content: center;
  height:90vh;
}

.artistIcon{
  float:right;
  margin-top: -70px;
  margin-right: -48px;
  border:none; 
  overflow:hidden;
}

.mediaPlayer{
  box-shadow: 0px 0px 15px black;
}

</style>
