import {
  createStore,
  createLogger,
  Store,
  useStore as baseUseStore,
} from "vuex";
import { InjectionKey } from "vue";
import { RootInterface, AllstateTypes } from "./type";
import user from "./modules/user";
import sys from "./modules/sys";

export default createStore<RootInterface>({
  modules: {
    user,
    sys,
  },
  plugins: [createLogger()],
});

export const key: InjectionKey<Store<RootInterface>> = Symbol("vue-store");

export function useStore<T = AllstateTypes>() {
  return baseUseStore<T>(key);
}
