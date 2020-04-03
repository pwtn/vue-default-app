import Vue from "vue";
import Vuex from "vuex";

// import moduleUsers from "./modules/users";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // users: moduleUsers,
  }
});

export default store;
