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
        {id:0, title:"Merchandise", page:"merch", image:"https://picsum.photos/600/300/?image=25"},
        {id:1, title:"Music", page:"music", image:"https://picsum.photos/600/300/?image=25"},
        {id:2, title:"Photography", page:"photos", image:"https://picsum.photos/600/300/?image=25"},
        {id:3, title:"Videography", page:"videos", image:"https://picsum.photos/600/300/?image=25"}
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
    padding: 20px 65px;
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
  



</style>
