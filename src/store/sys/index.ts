import { RootStateInterface, SysConfigInterface } from '@/types/store'
import { Module } from 'vuex'
import {
  SET_SYS_ID,
  SET_TENANT_ID,
  SET_TOKEN,
  SET_USER_INFO
} from './actionType'

export default {
  namespaced: true,
  state: {
    token: '',
    sysId: '',
    tenantId: ''
  },
  actions: {
    [SET_USER_INFO]: ({ commit }, data: SysConfigInterface): void => {
      const { token, sysId, tenantId } = data
      if (token) {
        commit(SET_TOKEN)
      }
      sysId && commit(SET_SYS_ID)
      tenantId && commit(SET_TENANT_ID)
    }
  },
  mutations: {
    [SET_TOKEN]: (state, token: string): void => {
      state.token = token
    },
    [SET_SYS_ID]: (state, sysId: string): void => {
      state.sysId = sysId
    },
    [SET_TENANT_ID]: (state, tenantId: string): void => {
      state.tenantId = tenantId
    }
  }
} as Module<SysConfigInterface, RootStateInterface>
