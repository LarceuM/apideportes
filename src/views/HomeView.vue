<template>
  <div class="home">
  <h3> Todos los Deportes </h3>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col> <Conteo tipo="Todos" /></b-col>
    </b-row>
</b-container>
  <br>
  <div  >
            <div id="enblo" v-for="(deporte,indice2) of losDatos1" :key="indice2" >
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
                      {{deporte.strSportDescription.substring(0,120)}}
                      <hr>
<!--                  <b-button variant="outline-danger" @click="mtexto()">Ver mas</b-button>
!-->
                      <b-button variant="outline-danger"><router-link class="primary"
                      v-bind:to="`/detpro/${deporte.idSport}`">Ver Mas</router-link></b-button>


                    </div>
                    <div  v-if="!mostrar" >
                      {{deporte.strSportDescription.substring(0,deporte.strSportDescription.length)}}
                      <b-button variant="outline-danger" @click="mtexto()">Ver menos</b-button>
                    </div>
                    <div> <br><p>     Valor : {{deporte.idSport}} </p>           </div>

                </b-card-text>
<!--
                <b-button variant="outline-primary"><router-link class="primary"
                v-bind:to="`/detalle/${deporte.idSport}`">Comprar</router-link></b-button>
!-->
                <b-button variant="outline-primary" @click="botonComprar(indice2)">Comprar</b-button>

              </b-card>
            </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


import {mapState,mapActions}  from 'vuex'

import Conteo from '@/components/Conteo.vue'

export default {
  name: 'HomeView',
  components: {
    Conteo
  },
  data(){
    return{
    mostrar:true,
  }
  },
  methods:{
    ...mapActions(["regCarro"]),
    mtexto(){
      if (this.mostrar==true){
        this.mostrar= false;
      }
      else {
        this.mostrar= true;
      }
    }, //fin mtexto
  botonComprar(elindice){
  //    console.log("indice    :"+elindice + " dato    :" +this.losDatos1[elindice].strSport);

    let idcompra = elindice;
    let prodcompra = this.losDatos1[elindice].idSport;
    let namecompra = this.losDatos1[elindice].strSport;
//  let desccompra = this.losDatos1[elindice].strSportDescription;
    let imagcompra = this.losDatos1[elindice].strSportThumb;
    let valucompra = parseInt(this.losDatos1[elindice].idSport);

    let regacomp = {
        prodcomp: prodcompra,
        namecomp: namecompra,
//      desccomp: desccompra,
        imagcomp: imagcompra,
        valucomp: valucompra,
      }
//      console.log (regacomp);
        this.regCarro(regacomp);
  }, //fin botonComprar

  },
  computed: {
  ...mapState(["losDatos1"]),
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
