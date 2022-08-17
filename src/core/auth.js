import { useProfileStore } from "@/stores/profile";

const login = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "amethgabriel07",
        status: "active",
      });
    }, 2500);
  });
};

export const main = async () => {
  // Se debe iniciar el useStore() aqui, porque si se hace por fuera no funcionara, debido a que aún no existe pinia en el main.js
  // Entonces se inicia el uso del store una vez se llame a la función
  const profileStore = useProfileStore();
  const user = await login();
  console.log(user);
  profileStore.username = user.username;
  profileStore.status = user.status;
};
