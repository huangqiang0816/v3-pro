import { Module } from "vuex";
import { ISys, IRoot } from "../type";

const sys: Module<ISys, IRoot> = {
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
