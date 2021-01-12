<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />
    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Photography</h1>
    <hr>
    <!-- <iframe src="https://photos.app.goo.gl/Fw4AbGqhX422QuKB9" title="Google Photos"></iframe> -->
    
    <!-- curator.io -->
    <div class="photosContainer">
      <div id="curator-feed-default-feed-layout">
        <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>
      </div>
    </div>
    <!-- <div class="photosContainer">
      <img 
        v-for="i in displayPhotos" 
        :key="i.src"
        :src="i.src"
        :alt="i.title"
        :width="i.width"
        class="photos" />
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'Photos',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      // photos:[
      //   {src:"https://picsum.photos/600/300/?image=25", title:"...", tag:"", width:0},
      //   {src:"https://picsum.photos/600/300/?image=26", title:"...", tag:"", width:0},
      //   {src:"https://picsum.photos/600/300/?image=24", title:"...", tag:"", width:0},
      //   {src:"https://picsum.photos/600/300/?image=27", title:"...", tag:"", width:0},
      //   {src:"https://picsum.photos/600/300/?image=23", title:"...", tag:"", width:0},
      //   {src:"https://picsum.photos/600/300/?image=22", title:"...", tag:"", width:0},
      // ],
      // displayPhotos:[]
    }
  },

  mounted() {
    this.loadImages()

    //Generate random widths
    // var maxWidth = screen.width/3;
    // var minWidth = 200;
    // console.log("Max: ",maxWidth)
    // for(var i=0;i<this.photos.length;i++){
    //   var random = Math.floor(Math.random() * maxWidth) + minWidth;
    //   this.photos[i].width = random;
    // }

    // this.displayPhotos =this.photos;


  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    loadImages: function(){
      /* curator-feed-default-feed-layout */
      var i, e, d = document, s = "script";
      i = d.createElement("script");
      i.async = 1;
      i.src = "https://cdn.curator.io/published/346106af-be51-447b-b1d1-8c2711c539bc.js";
      e = d.getElementsByTagName(s)[0];
      e.parentNode.insertBefore(i, e);
    }




  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  padding: 5vw;
}

.returnButton{
  /* float: left; */
  /* margin: 15px; */
  z-index: 10;
  position: absolute;
  left: 5px;
  top: 5px;
}

.photosContainer{
  margin: 3vw;
  /* display: flex;
  flex-wrap: wrap;
  align-items: flex-start; */
}

.photos{
  z-index:9;
  margin:5px;
  cursor: pointer;
  transition: transform .3s ease-in-out;
}

.photos:hover{
  z-index:10;
  transform: scale(1.3);
  transition: transform .3s ease-in-out;
}

@media only screen and (max-width: 600px) {
  .photosContainer {
    margin: 30px -40px 30px -40px;
  }
}

</style>
