import Vue from "vue";
import "./plugins/vuetify";
import router from "./router";

import BootstrapVue from "bootstrap-vue";
import store from "./store";
import App from "./App";

import Default from "./Dashboard/baseLayout.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component("default-layout", Default);

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App },
});