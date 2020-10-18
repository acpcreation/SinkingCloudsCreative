<template>
  <div class="overlay">
    <div class="main"> 
      <b-button variant="secondary" size="lg" @click="closeWindow()" class="close">X</b-button>
      <img class="productImage" :src="product.img"/>
      <div class="productDetails">
        <h2>{{product.title}}</h2>
        <br>
        <p>{{product.type}} - {{product.price}}</p>
        <p>{{product.subtitle}}</p>
        <p>Venmo - @acpcreation</p>
        <p>CashApp - $acpcreation</p>
        <p>PayPal - acpcreation@gmail.com</p>
        <p>Send payment amount with product title and quantity via payment method of choice. Send an email to SinkingCloudsBand@gmail.com if you have any questions.</p>
      </div>
    </div>



  </div>  
</template>

<script>
export default {
  name: 'PurchaseItem',
  props: {
   product: Object
  },
  data(){
    return{
      contextArray: []
    }
  },
  mounted: function(){
    console.log(this.product)
    
  },
  methods:{
    closeWindow: function(){
      this.$emit("toggleProductView");
    },
    
    
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overlay{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgba(22, 22, 22, 0.80);
    z-index: 100;
    /* overflow-y: hidden;  */
  }

  .main{
    background-color: white;
    border-radius: 5px;
    margin: 10vh 20vw;
    padding: 20px;
    display:flex;
    flex-wrap: nowrap;
  }

  .close{
    float:right;
  }

  .productImage{
    width:50vw;
  }

  .productDetails{
    padding: 20px 10px;
    min-width: 30vh;
    background-color: darkred;
  }

  h2{
     color: rgb(80, 80, 80);
  }
 
</style>