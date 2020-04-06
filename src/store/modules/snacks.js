// This module manages an array of backend messages
// These messages will be displayed in one component (using vuetify's snackbar component hence the name)

import { setTimeout } from "core-js";

const moduleSnacks = {
  state: { list: [] },
  mutations: {
    addSnack({ list }, { message, type }) {
      list.push({ message, type, value: true });
    },
    removeSnack({ list }) {
      list.splice(0, 1);
    }
  },
  actions: {
    dispatchSnack({ commit }, { message, type }) {
      commit("addSnack", { message, type });
      // remove the snack from the array once it has been displayed
      // the default timeout being 6000 (not sure it is really usefull)
      setTimeout(() => commit("removeSnack"), 7000);
    }
  }
};

export default moduleSnacks;
