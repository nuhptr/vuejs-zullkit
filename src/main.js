import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Import the CSS file for Tailwind
import "./assets/css/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
