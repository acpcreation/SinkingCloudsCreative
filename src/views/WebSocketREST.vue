<template>
  <div class="main">
    <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" />
    <div style="padding:10% 30%; ">

      <fd-input v-model="phoneNumber" placeholder="Phone Number" />
      <br>
      <br>
      <fd-text-area v-model="textMessage" placeholder="Message Content" />
      <br>
      <br>
      <fd-button styling="emphasized" icon="mri-scan" @click="sendWebSocket" >Websocket</fd-button>
      <fd-button type="positive" styling="emphasized" icon="example" @click="sendRest" >REST</fd-button>
      
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'WebSocketREST',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      phoneNumber: "+14703716725",
      textMessage: null,
      wssConnection: null, //WEBSOCKET
    }
  },

  created: function() {
    var that = this;
    //==============================
    //========= WEBSOCKET ==========
    //==============================
    console.log("Starting Connection to WebSocket Server")
    // this.wssConnection = new WebSocket("wss://echo.websocket.org")
    this.wssConnection = new WebSocket("wss://mgwws.hana.ondemand.com/endpoints/v1/ws");
    this.wssConnection.onopen = function(event) {
      console.log("Succesfully connected to the WebSocket Server ", event);
      that.wssConnection.send('{"subscribe": "out/sgw/testSMS"}');
    }
    
    this.wssConnection.onmessage = function(event) {
      console.log("WSS Received: ",event);
      var jsonData = JSON.parse(event.data);
      alert(jsonData.message); //+event.data
    }



  },

  methods: {
    openPage: function() {
      this.$router.push("/");
    },


    //==============================
    //========= WEBSOCKET ==========
    //==============================
    sendWebSocket: function(){
      console.log("WSS Send: ", this.wssConnection);
      // alert("Websocket: "+ this.wssConnection)
      // var data = "Websocket Message: "+ this.phoneNumber;

      var data = {
        clientId:"testSMS",
        topic:"in/sgw/dev",
        metadata:false,
        serviceId:10,
        inputParams:{
          dest:this.phoneNumber,
          contents: this.textMessage,
          type:"httpclient"
        }
      }
      this.wssConnection.send(JSON.stringify(data));

    },


    //==============================
    //=========== REST =============
    //==============================
    sendRest: function(){
      console.log("Get SAPSIM setup");
      var restURL = "https://sapsim.cfapps.us10.hana.ondemand.com/setupsim?name=Agribusiness";
      axios.get(restURL)
        .then(function (response) {
          console.log("REST (POST) Success: ", response.data);
          alert("REST Data: "+ JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log("REST (POST) Error: ",error);
        });
    }



  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{

}

.returnButton{
  /* float: left; */
  /* margin: 15px; */
  z-index: 10;
  position: absolute;
  left: 5px;
  top: 8px;
}

button{
  /* margin-left: 10px; */
  margin-right: 20px;
}

</style>
