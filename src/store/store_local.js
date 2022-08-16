import { reactive } from "vue";

const store = reactive({
  username: "amethgabriel",
  updateUsername(newUsername) {
    this.username = newUsername;
  },
});

export default store;
