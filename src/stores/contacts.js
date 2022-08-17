import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useProfileStore } from "@/stores/profile";

export const useContactsStore = defineStore("contacts", () => {
  const profileStore = useProfileStore();

  const contacts = ref([
    { id: 2, name: "Maria", avatar: "/avatars/avatar.jpg" },
    { id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
  ]);

  const getContactById = computed(() => {
    return (id) => {
      if (id === profileStore.id) {
        return {
          id: profileStore.id,
          name: profileStore.username,
          avatar: profileStore.avatar,
        };
      }

      return contacts.value.find((contact) => contact.id === id);
    };
  });

  return { contacts, getContactById };
});
