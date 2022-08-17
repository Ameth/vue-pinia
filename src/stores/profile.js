import { defineStore } from "pinia";
import { ref } from "vue";

export const useProfileStore = defineStore("profile", () => {
  const id = ref(1);
  const username = ref("amethgabriel1991");
  const avatar = ref("/avatars/avatar-02.jpg");
  const status = ref("active");

  return { id, username, avatar, status };
});
