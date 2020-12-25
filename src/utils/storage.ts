export default {
  /**
   * @param key 
   * @param value
   * @example 
   */
  setLocalItem: (key: string, value: string): void => {
    window.localStorage.setItem(key, value);
  },
  getLocalItem: (key: string): string | null => {
    return window.localStorage.getItem(key);
  },
  delLocalItem: (key: string): void => {
    window.localStorage.removeItem(key);
  },
  delLocalAll: (): void => {
    window.localStorage.clear();
  },
  setSessionItem: (key: string, value: string): void => {
    window.sessionStorage.setItem(key, value);
  },
  getSessionItem: (key: string): string | null => {
    return window.sessionStorage.getItem(key);
  },
  delSessionItem: (key: string): void => {
    window.sessionStorage.removeItem(key);
  },
  delSessionAll: (): void => {
    window.sessionStorage.clear();
  },
};
