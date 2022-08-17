import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./index.css";
import { Icon } from "@iconify/vue";
import { main } from "@/core/auth";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.component("Icon", Icon);

// ejecutar el store fuera de un componente, con un store propio que llama una función (asincrona en este caso) y se llama luego de iniciar Pinia
main();

app.mount("#app");
