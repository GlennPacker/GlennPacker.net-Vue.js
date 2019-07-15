import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import VeeValidate from "vee-validate";

import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import "./assets/css/font-awesome.min.css";

Vue.config.productionTip = false;

Vue.use(VeeValidate);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
