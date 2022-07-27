<template>
      <div class="container-fluid  footer bg-dark">
        <b-row>
          <b-col>
              <img id="laima" alt="" src="@/assets/logoArmo.jpg">
          </b-col>
          <b-col>
              <h6>LORENZO ARCEU M. </h6>
          </b-col>
          <b-col>
              <h6>Sport....</h6>
          </b-col>
          <b-col>
          <div class="col-md-auto text-end" id="armo_color">
            <a href= "https://github.com/" target="_blank" <i class="fa-brands fa-github-square mx-2 mt-3 fa-2x "></i></a>
            <a href= "https://cl.linkedin.com/" target="_blank" <i class="fa-brands fa-linkedin mx-2 mt-3 fa-2x "></i></a>
            <a href= "https://twitter.com/?lang=es" target="_blank" <i class="fa-brands fa-twitter-square mx-2 mt-3 fa-2x "></i></a>
            <a href= "https://es-la.facebook.com/" target="_blank" <i class="fa-brands fa-facebook-square mx-2 mt-3 fa-2x "></i></a>
        </div>
          </b-col>

      </b-row>
    </div>
</template>

<style scoped>
.footer {
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

h6 {
    font-family: 'Cabin', sans-serif;
    color: #FFF;
    text-align: left;
    vertical-align: center;
}
#armo_color {
    font-family: 'Cabin', sans-serif;
    color: #FFF;
    text-align: left;
    vertical-align: center;
}

#laima {
    text-align: left;
    vertical-align: left;
    width:20%;
}

</style>
