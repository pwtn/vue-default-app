import Vue from "vue";
import Vuex from "vuex";

import moduleLogin from "./modules/login";
import moduleUsers from "./modules/users";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login: moduleLogin,
    users: moduleUsers
  },
  state: {
    applicationName: "Default Application"
  }
});

export default store;
