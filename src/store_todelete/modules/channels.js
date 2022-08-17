export const channels = {
  namespaced: true,
  state() {
    return {
      channels: [
        { id: 1, name: "General", messages: [] },
        { id: 2, name: "Familia", messages: [] },
        { id: 3, name: "Anuncios", messages: [] },
        { id: 4, name: "Proyecto Vue", messages: [] },
        { id: 5, name: "Cuarentena recargado", messages: [] },
        { id: 6, name: "Trabajo", messages: [] },
      ],
    };
  },
  getters: {
    getChannels: (state, getters, rootState, rootGetters) => (search) => {
      return state.channels
        .filter((channel) =>
          channel.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((channel) => {
          //   console.log(rootGetters);
          const messages = rootGetters["messages/getUnread"](channel.id);
          //   console.log("cant", messages);
          return {
            ...channel,
            messages,
          };
        });
    },
    getChannelById: (state) => (channelId) => {
      const channelActual = state.channels.find(
        (channel) => channel.id === parseInt(channelId)
      );
      //   console.log(channelActual.name);
      return channelActual.name;
    },
  },
};
