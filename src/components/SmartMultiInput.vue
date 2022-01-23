<template>
  <div class="main">

    <!-- Muti selection -->
    <b-input-group prepend="title" class="mb-2">
      <div class="selected">
        <div class="entries">
          <p>text</p>
          <b-icon class="icon" icon="x-circle-fill" scale="1"></b-icon>
        </div>
      </div>
      <div>
        <input type="text"/>
      </div>
      <b-button class="submitButton" variant="primary">Submit</b-button>
    </b-input-group>
    
  </div>
</template>

<script>
export default {
  name: 'SmartMultiInput',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      selected: ""
  
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
  
}

input{
  border-radius: 0px;
  border-left:none;
}

.submitButton{
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.selected{
  background-color: white;
  padding: 0px 5px;
  display: inline-flex;
  flex-wrap: nowrap;

  /* margin: -.5px 0px;
  border-top: solid .5px gray;
  border-bottom: solid .5px gray; */
  /* margin: .5px 0px; */
}

.entries{
  margin: 7px 5px 0px 5px;
  font-size: 14px;
  background-color: lightgray;
  padding: 1px 4px;
  border: solid 1px rgb(34, 34, 34); 
  border-radius: 5px;
  display: inline-flex;
  flex-wrap: nowrap;
  height: 22px;
}

.entries p{
  all:none;
  margin: 0px;
  margin-right: 5px;
  margin-top: -2px;
  color: black;
}

.entries .icon{
  cursor: pointer;
  color:rgb(34, 34, 34);
  margin: 2px 0px;
}


</style>
