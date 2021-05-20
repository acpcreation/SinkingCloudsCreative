<template>
  <div class="main">
    <h2>{{title}}</h2>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- background="#ababab" -->

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide class="slide" v-for="i in photos" :key="i" :img-src="i"> -->
        <!-- <h1>Hello world!</h1> -->
      <!-- </b-carousel-slide> -->

      <b-carousel-slide v-for="i in photos" :key="i">
        <template #img>
          <img
            class="d-block img-fluid w-100 slide" 
            :src="i"
            alt="image slot">
        </template>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    props: {
      photos: Array,
      title: String
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
.main{
  margin-top:-20px;
}

#carousel{
  text-shadow: 1px 1px 2px #333;
}

.slide img{
  height: 50vh;
  width: auto !important;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}

.slide :hover{
  /* z-index:10; */
  transform: scale(1.3);
  transition: transform .3s ease-in-out;
}
</style>