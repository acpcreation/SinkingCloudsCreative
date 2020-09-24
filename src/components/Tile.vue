<template>
  <div class="tile" @click="openPage(pageName)">
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
    pageName: String
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
  width: 210px;
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
}

.subTitle{
  margin-top: 5px;
  margin-left: 1px;
  font-size: 14px;
  text-align: left;
  color: gray;
  letter-spacing: 1px;
}

.footer{
  margin: 5px 0px 0px 0px;
  font-size: 12px;
  color: gray;
  letter-spacing: 1px;
  /* float: right; */
  right: 15px;
  bottom: 13px;
  position: absolute;
}

</style>
