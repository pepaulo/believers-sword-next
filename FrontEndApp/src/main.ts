import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/router";
import App from "./App.vue";
import "virtual:windi.css";
import "./GlobalDeclare";

createApp(App).use(createPinia()).use(router).mount("#app");
