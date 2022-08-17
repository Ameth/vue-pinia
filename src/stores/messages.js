import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMessagesStore = defineStore("messages", () => {
  const messages = ref([
    {
      id: 1,
      author: 1,
      message: "Hola 👀",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 1,
    },
    {
      id: 2,
      author: 2,
      message: "Holaaa!!!",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 1,
    },
    {
      id: 3,
      author: 3,
      message: "Hola a todo el mundo 😊",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 1,
    },
    {
      id: 4,
      author: 3,
      message: "¿Cómo están?",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 1,
    },
    {
      id: 5,
      author: 1,
      message: "Todo muy bien :D",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 2,
    },
    {
      id: 6,
      author: 2,
      message: "Si, todo bien.",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 2,
    },
    {
      id: 7,
      author: 1,
      message: "Oigan, les escribo para contarles algo... 😌",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 3,
    },
    {
      id: 8,
      author: 3,
      message: "A vers 👀",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 3,
    },
    {
      id: 9,
      author: 2,
      message: "Ahhhh!!",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 3,
    },
    {
      id: 10,
      author: 2,
      message: "¡Cuenta ese chismesito yaaaa!",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 3,
    },
    {
      id: 11,
      author: 1,
      message: "Pues, ¡acabamos de lanzar los nuevos cursos de Vue.js!",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 3,
    },
    {
      id: 12,
      author: 2,
      message: "So va coleto!",
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: 3,
    },
  ]);

  const getMessages = computed(() => {
    return (channelId) => {
      return messages.value.filter(
        (message) => message.channelId === parseInt(channelId)
      );
    };
  });

  // console.log(getMessages.value(1));

  const getUnread = computed(() => {
    return (channelId) => {
      return getMessages
        .value(channelId)
        .filter((message) => message.read === false).length;
    };
  });

  const addMessage = (newMessage) => {
    messages.value.push({
      id: Date.now(),
      author: 1,
      message: newMessage.message,
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      channelId: parseInt(newMessage.channelId),
    });
  };

  return { messages, getMessages, getUnread, addMessage };
});
