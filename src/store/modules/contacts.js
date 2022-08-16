export const contacts = {
  namespaced: true,
  state() {
    return {
      contacts: [
        { id: 1, name: "Tú", avatar: "/avatars/avatar-02.jpg" },
        { id: 2, name: "Maria", avatar: "/avatars/avatar.jpg" },
        { id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
      ],
    };
  },
  getters: {
    getContact: (state) => {
      return state.contacts;
    },
    getContactById: (state, getters) => (id) => {
      return state.contacts.find((contact) => contact.id === id);
    },
  },
};
