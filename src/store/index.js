import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    losDatos1:[],
    losDatosE:[],
    losDatosT:[],

    elcarro:[],
  },
  getters: {
      conteoCards(state) {
    //    const {losDatos1} = State;
    //    console.log(state.losDatos1.length)
        return state.losDatos1.length;
      },
      conteoCardsE(state) {
        const {losDatosE} = state;
    //    console.log(losDatosE.length)
        return losDatosE.length;
      },
      conteoCardsT(state) {
        const {losDatosT} = state;
    //    console.log(losDatosT.length)
        return losDatosT.length;
      },
      tolalcarro(state) {
        let valcarroacum = 0;
        let cant = 1;
        for (producto of elcarro) {
          valcarroacum += (producto.valucomp * cant)
        }
        return [valcarroacum,
      },
  },
  mutations: {
    cargadata1(state,dat1){
  //    console.log(dat1);
      state.losDatos1.push(dat1);
      if (dat1.strFormat=="EventSport"){
          state.losDatosE.push(dat1);
        }
      if (dat1.strFormat=="TeamvsTeam"){
          state.losDatosT.push(dat1);
        }
    },

    clearArraylosDatos1(state){
        state.losDatos1 = [];
    },
    agregaCarro(state, regacomp){
        state.elcarro.push(regacomp);
    },
    borraCarro(state, elindice){
       state.elcarro.splice(elindice, 1);
    }
  },
  actions: {
      async getData1({ commit}) {
        try{
            const res = await fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php");
            const json = await res.json();
        //    commit("clearArraylosDatos1");   // limpia arreglo losDatos1
            //  console.log(json);
            for (let dat1 of json.sports){
  //   console.log(dat1);
              commit ("cargadata1",dat1)
            }
          }
        catch(err){
             console.log('ERROR CONSUMIENDO LA API, el error es =>');
             console.log(err);
          }
      },
      regCarro({commit},regacomp){
        commit("agregaCarro", regacomp);
      },
      borCarro({commit}, elindice){
           commit("borraCarro", elindice);
        },


  },
  modules: {
  }
})
