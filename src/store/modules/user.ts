import { setToken, getToken } from "../../utils/auth";
import { Module } from "vuex";
import { userInterFace, RootInterface } from "../type";

const user: Module<userInterFace, RootInterface> = {
  state: {
    token: getToken(),
    tenantId: "",
    sysId: "",
  },
  actions: {
    setUser: ({ commit }, data) => {
      const { token, tenantId, sysId } = data;
      if (token) {
        setToken(token);
        commit("SET_TOKEN", token);
      }
      tenantId && commit("SET_TENADNT_ID", tenantId);
      sysId && commit("SET_SYS_ID", sysId);
    },
  },
  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data;
    },
    SET_TENADNT_ID: (state, id) => {
      state.tenantId = id;
    },
    SET_SYS_ID: (state, id) => {
      state.sysId = id;
    },
  },
};
export default user;
