import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store, { key } from "@/store";

import elementPlus from "@/plugins/element-plus";

import "@/router/permission";
import "normalize.css";
import "@/style/index.scss";

const app = createApp(App);
app.use(router);
app.use(store, key);
// 加载element
elementPlus(app);

app.mount("#app");
