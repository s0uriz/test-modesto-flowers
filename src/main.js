import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import VButton from "@/components/ui/VButton.vue";
import VDialog from "@/components/ui/VDialog.vue";
import VTextarea from "@/components/ui/VTextarea.vue";
import VCheckbox from "@/components/ui/VCheckbox.vue";
import VRadio from "@/components/ui/VRadio.vue";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.component("v-button", VButton);
Vue.component("v-dialog", VDialog);
Vue.component("v-textarea", VTextarea);
Vue.component("v-checkbox", VCheckbox);
Vue.component("v-radio", VRadio);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
