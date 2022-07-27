<template>
  <div>
      <div id="letras">
      <span > Total deportes:
         <h1 v-if="tipo=='Todos'">{{ conteoCards }}  de  {{ conteoCards }}</h1>
         <h1 v-if="tipo=='Event'"> {{ conteoCardsE }} de  {{ conteoCards }}</h1>
         <h1 v-if="tipo=='Team'"> {{ conteoCardsT }} de  {{ conteoCards }}</h1>
       </span>
        </div>
         </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
  name :'conteo',
    props:{
      tipo: String,
    },
    data() {
      return {
        show: true
      }
    },
    methods: {

    },
    computed:{
      ...mapGetters(["conteoCards","conteoCardsT","conteoCardsE"])
    },
  }
</script>


<style scoped>
#input-1{
  justify-content:left;
}
<style>
