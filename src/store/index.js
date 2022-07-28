import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    loading: false,
    hideModal: JSON.parse(localStorage.getItem("hideModal")) || false,
  },
  mutations: {
    SET_QUESTIONS(state, payload) {
      state.questions = payload;
    },
    SET_STATUS(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    getQuestions({ commit }) {
      commit("SET_STATUS", true);
      setTimeout(() => {
        Vue.axios
          .get("/questions.json")
          .then((res) => {
            commit("SET_QUESTIONS", res.data);
            commit("SET_STATUS", false);
          })
          .catch(() => {
            commit("SET_QUESTIONS", []);
            commit("SET_STATUS", false);
          });
      }, 1500);
    },
  },
  modules: {},
});
