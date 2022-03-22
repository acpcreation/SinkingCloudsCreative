<template>
  <div class="tile" 
    v-bind:class="{inactive: !production}"
    @click="openPage(pageName)">
    <p class="title">{{title}}</p>
    <p class="subTitle">{{subTitle}}</p>
    <p>{{icon}}</p>
    <p class="footer">{{footer}}</p>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    title: String,
    subTitle: String,
    icon: String,
    footer: String,
    pageName: String,
    production: Boolean
  },
  methods:{
    openPage: function(value) {
      console.log(value)
      this.$router.push(value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tile{
  margin: 17px;
  padding: 15px;
  min-width: 210px !important;
  max-width: 210px !important;
  height: 240px;
  border-color: rgb(48, 48, 49);
  border-radius: 5px;
  border-width: 10px;
  box-shadow: 0px 0px 12px;
  background: white;
  cursor: pointer;
  position: relative;
}

.title{
  margin: 0px;
  font-size: 22px;
  text-align: left;
  letter-spacing: 1px;
  text-transform: capitalize;
}

.subTitle{
  margin-top: 5px;
  margin-left: 1px;
  font-size: 14px;
  text-align: left;
  letter-spacing: 1px;
  /* text-transform: capitalize; */
}

.footer{
  margin: 5px 0px 0px 0px;
  font-size: 12px;
  letter-spacing: 1px;
  /* float: right; */
  right: 15px;
  bottom: 13px;
  position: absolute;
  text-transform: capitalize;
}

.inactive{
  background:rgba(248, 213, 213, 0.74)
}

@media (max-width: 600px) {
  .tile{
    transform: scale(0.7);
    margin:-20px;
  }
}

</style>
