const store = {
  profile: {
    username: "",
  },
  contacts: [
    {
      id: 1,
      name: "Tú",
      avatar: "/avatars/avatar.jpg",
    },
    {
      id: 2,
      name: "Jason",
      avatar: "/avatars/avatar-02.jpg",
    },
  ],
  messages: [
    {
      id: 1,
      author: 1,
      message: "Hola 👀",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      author: 2,
      message: "Holaaa!!!",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 3,
      author: 1,
      message: "Hola 👀",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 4,
      author: 2,
      message: "Holaaa!!!",
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
  channels: [
    {
      id: 1,
      name: "General",
      messages: [1, 2],
    },
    {
      id: 2,
      name: "Proyecto Vue",
      messages: [3, 4],
    },
  ],
};
