import httpService from "@/services/httpService";

const login = {
  state: {
    user: {
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@gmail.com",
      isAdmin: true
    },
    // a supprimer
    testMessage: "Nothing yet..."
  },
  mutations: {
    // a supprimer
    updateMessage(state, payload) {
      state.testMessage = payload;
    }
  },
  actions: {
    async login({ commit }) {
      try {
        const resp = await httpService.post(
          "http://localhost:3000/login/login",
          {
            username: "rot",
            password: "123456"
          }
        );
        commit("updateMessage", resp.data);
      } catch (err) {
        if (err.response) {
          commit("updateMessage", err.response);
        } else if (err.request) {
          commit("updateMessage", "Problème avec le client");
        } else {
          commit("updateMessage", err);
        }
      }
    }
  }
};
export default login;
