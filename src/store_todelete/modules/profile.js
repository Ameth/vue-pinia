export const profile = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: "amethgabriel7",
      avatar: "/avatars/avatar-02.jpg",
    };
  },
  getters: {
    upperName(state) {
      return state.username.toUpperCase();
    },
    reversa(state) {
      return state.username.split("").reverse().join("");
    },
    recortar: (state) => (cant) => {
      return state.username.substring(0, cant);
    },
  },
  mutations: {
    updateUsername(state, newUsername) {
      state.username = newUsername;
    },
  },
  actions: {
    updateIfAdmin({ state, rootState, commit }, newValue) {
      //   console.log(rootState);
      if (rootState.role === "Admin") {
        commit("updateUsername", newValue);
      }
    },
  },
};
