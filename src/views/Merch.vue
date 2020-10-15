<template>
  <div class="main">
    <img class="iconImage" src="@/assets/MeltingCloudsWhite.png" @click="openPage" />
    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Merchandise</h1>
    <hr>
    <div class="flex">

      <a v-for="i in merch" :key="i.id" @click="openProduct(i)">
        <b-card
          :title="i.title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image" img-top
          class="mb-2 card">
          <b-card-text class="subtitle">
            {{i.subtitle}}
          </b-card-text>

          <b-button variant="primary">View Product</b-button>
        </b-card>
      </a>

    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Merch',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      merch:[
        {id:"B-W-Hat", title:"Black SC Hat", subtitle:"Black Sinking Clouds Hat w/ White Design", type:"Hat", img:""},
        {id:"N-W-Hat", title:"Navy SC Hat", subtitle:"Navy Sinking Clouds Hat w/ White Design", type:"Hat", img:""},
        {id:"W-B-Hat", title:"White SC Hat", subtitle:"White Sinking Clouds Hat w/ Black Design", type:"Hat", img:""},
        {id:"W-MAGA-NASA-Hat", title:"NASA MAGA Hat", subtitle:"White MAGA Hat w/ Space Design", type:"Hat", img:""},
      ],
    }
  },

  mounted() {
    


  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },

    openProduct: function(e){
      console.log(e)
    }




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

.flex{
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card{
  width: 20rem;
  border:none;
  margin: 20px 10px;

}

.subtitle{
  height: 60px;
}

/* .card h4{
  color: rgb(80, 80, 80) !important;
} */

</style>
