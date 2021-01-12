<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Videos</h1>
    <hr>

    <div class="videoPanels" v-for="i in videos" :key="i.link">
      <h2>{{i.title}}</h2>
      <iframe 
      width="560" 
      height="315" 
      :src="i.link" 
      frameborder="0" 
      allowfullscreen></iframe>
      <!--       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  -->
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Videos',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      videos: [
        {link:"https://www.youtube.com/embed/AMHRokLulf0", title:"Philippines 2020",},
        {link:"https://www.youtube.com/embed/JDwHghNS7yU", title:"San Francisco 2019",},
        {link:"https://www.youtube.com/embed/CQbJIbhNyes", title:"Suriname 2018",},
        // {link:"https://www.youtube.com/embed/yxDKfIgmXks", title:"Israel 2018",},
      ]
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

.videoPanels{
  margin-top: 40px;
  width: 100%;
  display:flex;
  justify-content: center;
  flex-wrap: wrap; 
  margin-bottom: 50px;
  padding-left:15vw;
  padding-right:15vw;
}




</style>
