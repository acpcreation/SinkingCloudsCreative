<template>
  <div class="main">
    <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" />
    <p>npm install @sap/hana-client</p>
  </div>
</template>

<script>
export default {
  name: 'HANA',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      sqlParameter: "Vegetables"
    }
  },

  mounted() {
    console.log("Create HANA Express Connection..");
    // const hanaClient = require("@sap/hana-client");
    // const connection = hanaClient.createConnection();
    // const connectionParams = {
    //   host : "hxehost",
    //   port : 39013,
    //   uid  : "SYSTEM",
    //   pwd  : "********",
    //   databaseName : "HXE"
    // }
    // connection.connect(connectionParams, (err) => {
    //   if (err) {
    //     return console.error("Connection error", err);
    //   }
    //   var whereClause = this.sqlParameter ? `WHERE "group" = '${this.sqlParameter}'` : "";
    //   var sql = `SELECT "name" FROM food_collection ${whereClause}`;

    //   connection.exec(sql, (err, rows) => {
    //     connection.disconnect();
    //     if (err) {
    //       return console.error('SQL execute error:', err);
    //     }
    //     console.log("Results:", rows);
    //     console.log(`Query '${sql}' returned ${rows.length} items`);
    //   });
    // });
  


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
  padding: 2vh 5vw;
}

.returnButton{
  /* float: left; */
  /* margin: 15px; */
  z-index: 10;
  position: absolute;
  left: 5px;
  top: 5px;
}

</style>
