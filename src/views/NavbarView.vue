<template>
  <div class="about">
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">
    <div class="container-fluid">
      <b-row>
        <b-col>
            <router-link class="navbar-brand" to="/"><img alt="logo" id="ellogo" src="@/assets/logo.png"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        </b-col>
      <b-col>      </b-col>
      <b-col>
            <div class="collapse navbar-collapse   " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link active" aria-current="page" to="/">
                    <i class="fa-solid fa-house"></i>
                    Home
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/team">
                    <i class="fa-solid fa-baseball"></i>
                    Team
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/event">
                    <i class="fa-solid fa-ranking-star"></i>
                    Evento
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contacto">
                    <i class="fa-solid fa-users-gear"></i>
                    Contactanos
                  </router-link>
                </li>

              </ul>
            </div>
            </b-col>
      </b-row>
    </div>
  </nav>

  <div  >
    <img class= "text-center" id="marca" alt="Marca Empresa" src="../assets/marca.png">
  </div>

  </div>
</template>

<script>


export default {
  name: 'Navbar',
  components:{

  },
  }
</script>

<style scoped>
#marca{
   width:20%;
   justify-content:center;
   }

#ellogo{
      width:25%;
      justify-content:left;
  }

</style >
