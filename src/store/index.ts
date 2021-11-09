import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeRoute: "/",
  },
  getters: {
    activeRoute: (state) => state.activeRoute,
  },
  mutations: {},
  actions: {
    setActiveRoute({ state }, activeRoute: string) {
      state.activeRoute = activeRoute;
    },
  },
  modules: {},
});
