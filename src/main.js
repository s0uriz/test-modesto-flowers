import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import VButton from "@/components/ui/VButton.vue";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.component("v-button", VButton);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
