<template>
  <div class="main">

    <a v-for="i in mainPages" :key="i.id" @click="openPage(i.page)">
      <b-card :img-src="i.image" img-alt="Card image" img-top class="card">
        <b-card-text>
          {{i.title}}
        </b-card-text>
      </b-card>
    </a>

  </div>
</template>

<script>

export default {
  name: 'MainPages',
  props: {},
  components: {},

  data(){
    return{
      mainPages:[
        {id:0, title:"Merchandise", page:"merch", image:"/img/products/maga.JPG"},
        {id:1, title:"Music",       page:"music", image:"/img/music.JPG"},
        {id:2, title:"Photography", page:"photos", image:"/img/photography.JPG"},
        {id:3, title:"Videography", page:"videos", image:"/img/videos.JPG"}
      ]
    }
  },

  methods: {
    openPage: function(e){
      this.$router.push(e);

    }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 20px 0px;
    min-height: 40vh;
  }

  .card{
    width: 20vw;
    min-width:20rem;
    text-align: center;
    font-size: 22px;
    border:none;
    margin: 20px 10px;
  }

  .card img{
    object-fit: cover;
    height: 250px;
  }
  
  img{
    /* height: 200px !important; */
  }
  



</style>
