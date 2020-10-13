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
        {id:0, title:"Merchandise", page:"Merchandise", image:"https://placekitten.com/1000/300"},
        {id:1, title:"Other", page:"other", image:"https://placekitten.com/1000/300"}
      ]
    }
  },

  methods: {
    openPage: function(e){
      console.log(e)
    }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 20px 65px;
  }

  .card{
    width: 20rem;
    text-align: center;
  }

</style>
