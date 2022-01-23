<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />

    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>About</h1>
    <hr>

    <div class="content">
      <h2>Overview</h2>
      <p>Thank you for checking out the Sinking Clouds website.</p>
      <p>This site is the result of...</p>
      <p>The purpose of this site is to be a place to collect, generate, and store ideas. So often we have a thought, idea, or innovation and we can't really <b>do</b> anything wit it. In the summer of 2020 (during the Corona Virus apocalypse/quarantine) I became restless and wanted to build something I could pour my creative passions into.</p>
      <p>With my experience in web development I built this hub for me to store information and use as a sandbox for me to learn and play around more.</p>
      <br>

      <h2>Technologies</h2>
      <p>On this site you will be able to see examples of a number of different technologies and creative venues including:</p>
      <div class="technologies">
          <p v-for="i in technologies" :key="i">{{i}}</p>        
      </div>

      <p></p>
      <p></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      technologies:[]
  
    }
  },

  mounted() {
    this.technologies = [
      "Vue.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "SVG Design",
      "SVG Animation",
      "A-Frame",
      "3D Modeling",
      "Animation",
      "Photography",
      "Videography",
      "Camtasia",
      "Music Writing",
      "Music Mixing",
      "Woodworking",
      "Digital Design",
      "Events",
      "Traveling",
      "APIs",
      "GitHub",
      "Blender", 
      "",
      "",
      ""
    ];


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

.returnButton{
  /* float: left; */
  /* margin: 15px; */
  z-index: 10;
  position: absolute;
  left: 5px;
  top: 5px;
}

.content{
  margin: 40px 5vw;
}

.content p{
  color: white;
  margin-left: 30px;
  max-width: 70vw;
}

.technologies{
  width:100%;
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
}

.technologies p{
  width: 200px;
  cursor: pointer;
  white-space: nowrap;
  transition: transform .3s ease-in-out;
  transform-origin: left;
}


.technologies p:hover{
  transform: scale(2);
  transition: transform .3s ease-in-out;
  transform-origin: left;
  /* text-align: center; */
}


</style>
