import { createApp } from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";

import './style/style.scss'

createApp(App)
.use(VueClipboard)
.mount("#app");
