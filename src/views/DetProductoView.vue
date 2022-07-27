<template>
  <div class="event">
  <h3> detalle  Producto </h3>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col>
        <div>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img :src="unprodet.strSportThumb" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="">
                    <b-card-text>
                </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
        </div>
      </b-col>
    <b-col></b-col>
  </b-row>
</b-container>
  <br>
  <div>
    </div>
  </div>
</template>
<script>

import {mapState} from 'vuex'

export default {
  name: 'DetProductoView',
  components:{
    },
  data(){
    return{
  }
  },
  methods:{
  },
  computed:{
  ...mapState (["losDatos1"])
  },
  created(){
        let elid = this.$route.params.id;
        console.log(elid);
        let unprodet=[]
        unprodet = this.losDatos1.find(e => e.idSport == elid);
    //  console.log(unindice);
        console.log(" un detalle producto .....");
        console.log(unprodet);

  }
  }
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#enblo {
  display:inline-block;
}

</style>
