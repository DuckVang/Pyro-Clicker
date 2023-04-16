import { createApp } from "vue";
import { createPinia } from "pinia"; // Import
import "./style.css";
import "@fontsource/vt323";

import App from "./App.vue";
declare module "vue3-particles";
import Particles from "vue3-particles";
// import router from './router'

const app = createApp(App);

app.use(createPinia()); // Create the root store
app.use(Particles);
// app.use(router)

app.mount("#app");
