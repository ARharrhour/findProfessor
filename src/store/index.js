import coach from "./modules/coach.js"
import request from "./modules/request.js"
import { createStore } from "vuex";



const store = createStore({


  modules: {
    coach: coach,
    request: request
  },
  state() {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }




});


export default store;
