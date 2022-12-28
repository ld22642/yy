import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "admin",
    userAge: 24,
  },
  getters: {},
  mutations: {
    //第一个参数是整个state对象，第二个参数就是用户传入的变量
    getuserAge(state, data) {
      state.userAge += data;
    },
    getuserName(state, data) {
      state.userName = data;
    },
  },
  actions: {},
  modules: {},
});
