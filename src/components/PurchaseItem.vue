<template>
  <div class="overlay">
    <div class="main"> 
      <b-button variant="secondary" size="lg" @click="closeWindow()" class="close">X</b-button>
      <div class="content">
        <span>
          <img class="productImage" :src="product.img"/>
          <p>Send payment amount with product title and quantity via payment method of choice. Send an email to sinkingcloudsband@gmail.com if you have any questions.</p>

        </span>
        
        <div class="productDetails">
          <h2>{{product.title}}</h2>
          <br>
          <p>{{product.type}} - {{product.price}}</p>
          <p>{{product.subtitle}}</p>
          <p>Venmo - @acpcreation</p>
          <p>CashApp - $acpcreation</p>
          <p>PayPal - acpcreation@gmail.com</p>
        </div>
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
    margin: 15vh 17vw;
  }

  .content{
    padding: 20px;
    display:flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .close{
    float:right;
    padding: 5px;
    margin: 10px 10px 10px -10px;
  }

  .productImage{
    width:40vw;
    margin-bottom: 10px;
  }

  .productDetails{
    padding: 20px 0px 20px 15px;
    width: 100% !important;
    /* min-width: 200px; */
    /* max-width: 50vw; */
  }

  h2{
    color: rgb(80, 80, 80);
    margin: -20px 0px 0px 0px !important;
  }
  
  @media only screen and (max-width: 1000px) {
    .main{
      margin: 10vh 10vw;
    } 
  }

  @media only screen and (max-width: 500px) {
    .content {
      flex-wrap: wrap;
    }

    h2{
      margin-top: 20px!important;
    }

    .productImage{
      width:62vw;
    }
    .productDetails{
      padding: 10px 0px;
    }

  }
</style>