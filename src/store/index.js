import coach from "./modules/coach.js"
import request from "./modules/request.js"
import { createStore } from "vuex";



const store = createStore({


  modules: {
    coach: coach,
    request: request
  },
  state() {
    return {
      userId: 'c3'
    }


  },
  mutations: {

  },
  actions: {

  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }




});


export default store;
