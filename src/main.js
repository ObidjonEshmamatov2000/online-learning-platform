import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

require("@/store/subscriber");

axios.defaults.baseURL = "https://mechatg.herokuapp.com";

Vue.config.productionTip = false;

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
