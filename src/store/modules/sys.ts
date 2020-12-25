import { Module } from "vuex";
import { sysInterface, RootInterface } from "../type";

const sys: Module<sysInterface, RootInterface> = {
  namespaced: true,
  state: {
    fold: false,
  },
  actions: {
    changeFold: ({ commit, state }) => {
      commit("SET_FOLD", !state.fold);
    },
  },
  mutations: {
    SET_FOLD: (state, fold) => {
      state.fold = fold;
    },
  },
};

export default sys;
