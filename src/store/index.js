// install Vuex
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import modules (this allows to keep the application clear and maintainable)
import moduleLogin from "./modules/login";
import moduleUsers from "./modules/users";
import moduleSnacks from "./modules/snacks";

// initialize the store
const store = new Vuex.Store({
  modules: {
    login: moduleLogin,
    users: moduleUsers,
    snacks: moduleSnacks
  },
  state: {
    applicationName: "Default Application"
  }
});

export default store;
