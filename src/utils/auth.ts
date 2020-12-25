import storage from "./storage";
const TOKEN_KEY = "OPMS_TOKEN";

export const getToken = (): string | null => {
  return storage.getLocalItem(TOKEN_KEY);
};
export const setToken = (value: string): void => {
  storage.setLocalItem(TOKEN_KEY, value);
};

/**
 * 判断路由是否带有参数，如果有返回参数对象
 * @param url
 */
export const getUrlParmas = (url: string): boolean | any => {
  const index = url.indexOf("?");
  if (index > -1) {
    let temp = Object.create(null);
    let parmas = url.substr(index + 1).split("&");
    parmas.forEach((item) => {
      const [key, value] = item.split("=");
      temp[key] = decodeURIComponent(value);
    });
    return temp;
  } else {
    return false;
  }
};
