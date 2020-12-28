import Storage from './storage'
const TOKEN_KEY = 'OPMS_TOKEN'
const SYS_KEY = 'OPMS_SYS'
const TENANT_KEY = 'OPMS_TENANT'

export const getToken = (): string | null => {
  return Storage.getLocalItem(TOKEN_KEY)
}

export const setToken = (value: string): void => {
  Storage.setLocalItem(TOKEN_KEY, value)
}

export const getSysId = (): string | null => {
  return Storage.getLocalItem(SYS_KEY)
}

export const setSysId = (value: string): void => {
  Storage.setLocalItem(SYS_KEY, value)
}

export const getTenantId = (): string | null => {
  return Storage.getLocalItem(TENANT_KEY)
}

export const setTenantId = (value: string): void => {
  Storage.setLocalItem(TENANT_KEY, value)
}
