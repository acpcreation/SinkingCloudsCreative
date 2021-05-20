<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Home Made</h1>
    <hr>

    <Carousel  v-for="i in projects" 
              :key="i.id" 
              :photos="i.photos" 
              :title="i.title"/>
    

  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'HomeMade',
  props: {
    
  },
  components: {
    Carousel
  },
  data(){
    return{
      projects:[
        {id: 3, slides: 10, photos:[], title:"Guitar Project 2018"},
        {id: 2, slides: 1, photos:[], title:"Lego Guitar Project 2016"},
        {id: 1, slides: 11, photos:[], title:"Guitar Project 2014"},
      ]
    }
  },

  mounted() {
    this.generateSlides();
  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    generateSlides: function() {
      let projects = this.projects;
      for(let i in projects){
        let photoLinks = [];
        for(let j=1; j <= projects[i].slides; j++){
          let link = "/img/HomeMade/P"+projects[i].id+"_"+j+".jpg";
          photoLinks.push(link)
        }
        this.projects[i].photos = photoLinks;
      }

      // console.log(this.projects)
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






</style>
