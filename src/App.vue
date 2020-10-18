<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;

  background-image:
    linear-gradient(to bottom, rgba(22, 22, 22, 0.85),rgba(0, 0, 0, 0.85)), 
    url('./assets/mountains.jpg'); 

  /* border-top: 5px solid rgb(20, 20, 20); */
  padding-bottom:100px;
}

a{
  cursor: pointer;
}

h1,h2,h3{
  all: none;
  font-weight: 100;
  letter-spacing: 1px;
  color: white;
  margin: 10vh auto 0px 30px;
}

h1{
  font-size: 36;
}

h2{
  font-size: 26;
}

p{
  color: rgb(80, 80, 80);
}

hr{
  /* width: 80vw; */
  background-color:white;
  margin: -3px 30px 0px 30px !important;
}

.iconImage{
  height: 90px;
  z-index: 10;
  /* position: absolute;
  left: 50vw;
  top: 5px; */
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -40px;
  margin-bottom: 10px;
  cursor:pointer;
}

</style>
