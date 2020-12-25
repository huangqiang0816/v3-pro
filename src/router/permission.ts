import router from "./";
import store from "@/store";

import { getUrlParmas } from "@/utils/auth";

router.beforeEach((to, from, next) => {
  // 登陆门户跳转后 拆分获取URL
  const urlParmas = getUrlParmas(to.fullPath);
  if (urlParmas && urlParmas["token"]) {
    
    store.dispatch('user/setUser', urlParmas)
    next({
      path: "/",
    });
    return;
  }
  next()
});

router.afterEach(() => {
  console.log("跳转完成");
});
