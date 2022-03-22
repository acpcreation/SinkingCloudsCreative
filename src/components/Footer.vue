<template>
  <div class="main">
    <hr>
    <p>Alexander Plattel <b class="dash">...</b> <a>IG: @sinkingcloudscreative</a></p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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

  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width:100%;
  justify-content: center;
  /* padding: 2vh 5vw; */
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
  position: fixed;
  bottom: 0;
}

p{
  color: white;
  font-size: 14px;
  margin: auto 5px;
  white-space:nowrap;
}

.dash{
  text-decoration: line-through;
  color: transparent;
  text-decoration-color: white;
  margin: auto 10px;
}

hr{
  width: calc(45vw - 150px);
  min-width: 20px;
  margin-top: 10px !important;
  margin-left: 10px !important;
  margin-right: 10px !important;
}

a:hover{
  cursor: pointer;
  text-decoration: underline !important;
}


@media (max-width: 600px) {
  .main{
    transform: scale(0.75);
  }

}

</style>
