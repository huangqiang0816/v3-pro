import {
  createStore,
  createLogger,
  Store,
  useStore as baseUseStore,
} from "vuex";
import { InjectionKey } from "vue";
import { IAllstate, IRoot } from "./type";
import user from "./modules/user";
import sys from "./modules/sys";

export default createStore<IRoot>({
  modules: {
    user,
    sys,
  },
  plugins: [createLogger()],
});

export const key: InjectionKey<Store<IRoot>> = Symbol("vue-store");

export function useStore<T = IAllstate>() {
  return baseUseStore<T>(key);
}
