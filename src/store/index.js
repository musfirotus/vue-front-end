import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import User from './modules/user.js'

import router from "../router/index";

import Api from "../service/api";

Vue.use(Vuex);

const Auth = {
  namespaced: true,
  state: () => ({
    token: "",
    user: {
      id: "",
      fullName: "",
      phone: "",
      role: "",
      username: "",
    },
    isError: false,
    errorMessage: "",
  }),
  mutations: {
    saveLogin(state, payload) {
      state.token = payload.token;
      state.user = {
        id: payload.id,
        fullName: payload.full_name,
        phone: payload.phone_number,
        role: payload.role,
        username: payload.username,
      };
    },
  },
  actions: {
    async reqLogin({ commit }, payload) {
      // console.log({ reqLogin: true });
      Api.post("/auth/login", {
        data: payload,
      })
        .then((res) => {

          const {
            data: { data },
          } = res;
          commit("saveLogin", data);
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: data.id,
              fullName: data.full_name,
              phone: data.phone_number,
              role: data.role,
              username: data.username,
            })
          );
          router.push("/dashboard");

          // console.log({ res });
        })
        .catch((error) => {
          console.log({ error });
        });
      // const { data } = await Api.post("/auth/login", { data: payload });
      console.log({ commit });
    },
  },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    User
  },
  plugins: [createPersistedState()],
});
