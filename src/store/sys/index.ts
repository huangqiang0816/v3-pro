import { RootStateInterface, SysConfigInterface } from '@/types/store'
import {
  getSysId,
  getTenantId,
  getToken,
  setSysId,
  setTenantId,
  setToken
} from '@/utils/helper/auth'
import { Module } from 'vuex'
import {
  SET_FOLD,
  SET_SYS_ID,
  SET_TENANT_ID,
  SET_TOKEN,
  SET_USER_INFO
} from './actionType'

export default {
  state: {
    fold: false,
    token: getToken(),
    sysId: getSysId(),
    tenantId: getTenantId()
  },
  actions: {
    [SET_USER_INFO]: ({ commit }, data: SysConfigInterface): void => {
      console.log('data', data)
      const { token, sysId, tenantId } = data
      token && commit(SET_TOKEN, token)
      sysId && commit(SET_SYS_ID, sysId)
      tenantId && commit(SET_TENANT_ID, tenantId)
    },
    [SET_FOLD]: ({ commit, state }): void => {
      commit(SET_FOLD, !state.fold)
    }
  },
  mutations: {
    [SET_FOLD]: (state, fold: boolean): void => {
      state.fold = fold
    },
    [SET_TOKEN]: (state, token: string): void => {
      setToken(token)
      state.token = token
    },
    [SET_SYS_ID]: (state, sysId: string): void => {
      setSysId(sysId)
      state.sysId = sysId
    },
    [SET_TENANT_ID]: (state, tenantId: string): void => {
      setTenantId(tenantId)
      state.tenantId = tenantId
    }
  }
} as Module<SysConfigInterface, RootStateInterface>
