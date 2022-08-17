import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useContactsStore = defineStore("contacts", () => {
  const contacts = ref([
    { id: 1, name: "Tú", avatar: "/avatars/avatar-02.jpg" },
    { id: 2, name: "Maria", avatar: "/avatars/avatar.jpg" },
    { id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
  ]);

  const getContactById = computed(() => {
    return (id) => {
      return contacts.value.find((contact) => contact.id === id);
    };
  });

  return { contacts, getContactById };
});
