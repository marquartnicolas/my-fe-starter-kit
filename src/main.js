import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import VueClickAway from "vue3-click-away"

import "./assets/tailwind.css"

createApp(App)
  .use(store)
  .use(router)
  .use(VueClickAway)
  .mount("#app")
