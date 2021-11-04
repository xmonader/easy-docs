import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as client from "ts-rmb-http-client/dist/es6";
import * as grid from "grid3_client/dist/es6";

(window as any).configs = {};
(window as any).configs.client = client;
(window as any).configs.grid3_client = grid;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
