import { createStore } from "vuex";
import { getUser } from "@/api";
import { profile } from "./modules/profile";
import { channels } from "./modules/channels";
import { messages } from "./modules/messages";
import { contacts } from "./modules/contacts";

const store = createStore({
  state() {
    return {
      role: "Admin",
      status: "active",
    };
  },
  getters: {
    upperName(state) {
      return state.role.toUpperCase();
    },
    reversa(state) {
      return state.role.split("").reverse().join("");
    },
    recortar: (state) => (cant) => {
      return state.role.substring(0, cant);
    },
  },
  mutations: {
    updateRole(state, newRole) {
      state.role = newRole;
    },
  },
  actions: {
    async obtenerUsername({ commit }) {
      const res = await fetch(`https://api.generadordni.es/v2/person/username`);
      const data = await res.json();
      // Un numero aleatorio del 0 al 9
      const n = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      //   console.log(data);
      commit("updateRole", data[n]);
    },
    async getUsername() {
      const user = await getUser(1);
      console.log(user);
      // commit("updateUsername", data[n]);
    },
  },
  modules: {
    profile,
    channels,
    messages,
    contacts,
  },
});

export default store;
