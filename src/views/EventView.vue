<template>
  <div class="event">
  <h3> Deportes Individuales</h3>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col> <Conteo tipo="Event" /></b-col>
    </b-row>
</b-container>
  <br>
  <div>
            <div id="enblo" v-for="deporte of losDatosE" >
              <b-card
                :title="deporte.strSport"
                :img-src="deporte.strSportThumb"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mb-2 mx-2"
              >
                <b-card-text>
                  <img alt="" v-bind:src="deporte.strSportIconGreen">
                  <br>
                    <div v-if="mostrar" >
                      {{deporte.strSportDescription.substring(0,60)}}
                      <hr>
                      <b-button variant="outline-danger" @click="mtexto()">Ver mas</b-button>
                    </div>
                    <div  v-if="!mostrar" >
                      {{deporte.strSportDescription.substring(0,deporte.strSportDescription.length)}} 
                      <b-button variant="outline-danger" @click="mtexto()">Ver menos</b-button>
                    </div>

                    <div> <br><p>     Valor : {{deporte.idSport}} </p>           </div>

                </b-card-text>

                <b-button variant="outline-primary"><router-link class="primary"
                v-bind:to="`/detalle/${deporte.idSport}`">Comprar</router-link></b-button>

              </b-card>
            </div>
    </div>
  </div>
</template>
<script>

import {mapState} from 'vuex'
import Conteo from '@/components/Conteo.vue'
export default {
  name: 'EventView',
  components:{
    Conteo,
    },
  data(){
    return{
    mostrar:true,
  }
  },
  methods:{
    mtexto(){
      if (this.mostrar==true){
        this.mostrar= false;
      }
      else {
        this.mostrar= true;
      }
}
  },
  computed:{
  ...mapState (["losDatosE"])
  },
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
