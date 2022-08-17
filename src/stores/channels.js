import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useMessagesStore } from "@/stores/messages";

export const useChanelsStore = defineStore("channels", () => {
  // console.log(messagesStore.getUnread);
  const messagesStore = useMessagesStore();

  const channels = ref([
    { id: 1, name: "General", messages: null },
    { id: 2, name: "Familia", messages: 2 },
    { id: 3, name: "Anuncios", messages: null },
    { id: 4, name: "Proyecto Vue", messages: null },
    { id: 5, name: "Cuarentena recargado", messages: null },
    { id: 6, name: "Trabajo", messages: null },
  ]);

  const getChannels = computed(() => {
    return (search) => {
      return channels.value
        .filter((channel) =>
          channel.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((channel) => {
          const messages = messagesStore.getUnread(channel.id);
          return {
            ...channel,
            messages,
          };
        });
    };
  });

  const getChannelsById = computed(() => {
    return (channelId) => {
      const channelActual = channels.value.find(
        (channel) => channel.id === parseInt(channelId)
      );
      return channelActual.name;
    };
  });

  return { channels, getChannels, getChannelsById };
});
