export default {
  /**
   * 设置localstorage存储
   * @param key
   * @param value
   */
  setLocalItem: (key: string, value: string): void => {
    window.localStorage.setItem(key, value)
  },
  /**
   * 获取localStorage对应key值
   * @param key
   * @returns 对应返回的值或者null
   */
  getLocalItem: (key: string): string | null => {
    return window.localStorage.getItem(key)
  },
  /**
   * 删除localStorage对应key数据
   * @param key
   */
  delLocalItem: (key: string): void => {
    window.localStorage.removeItem(key)
  },
  /**
   *删除 localStorage 所有的值
   */
  delLocalAll: (): void => {
    window.localStorage.clear()
  },
  /**
   * 设置 sessionStorage 存储
   * @param key
   * @param value
   */
  setSessionItem: (key: string, value: string): void => {
    window.sessionStorage.setItem(key, value)
  },
  /**
   * 获取sessionStorage对应key值
   * @param key
   * @returns 对应返回的值或者null
   */
  getSessionItem: (key: string): string | null => {
    return window.sessionStorage.getItem(key)
  },
  /**
   * 删除sessionStorage对应key数据
   * @param key
   */
  delSessionItem: (key: string): void => {
    window.sessionStorage.removeItem(key)
  },
  /**
   *删除 sessionStorage 所有的值
   */
  delSessionAll: (): void => {
    window.sessionStorage.clear()
  }
}
