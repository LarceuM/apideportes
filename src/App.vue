<template>
  <div id="app">
      <Navbar/>
      <router-view/>
      <Footer/>
  </div>
</template>
<script>
import {mapActions}  from 'vuex'

import Footer  from '@/views/FooterView.vue'
import Navbar  from '@/views/NavbarView.vue'
export default {
  name: 'App',
  components: {
    Footer,Navbar
    },

methods:{
...mapActions (["getData1"])

},
mounted(){
  this.getData1()
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
