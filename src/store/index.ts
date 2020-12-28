import {
  createLogger,
  createStore,
  Store,
  useStore as baseUseStore
} from 'vuex'
import sys from '@/store/sys'
import { InjectionKey } from 'vue'
import { AllStateInterface } from '@/types/store'

export default createStore<AllStateInterface>({
  modules: {
    sys
  },
  plugins: [createLogger()]
})

export const key: InjectionKey<Store<AllStateInterface>> = Symbol('vue-store')

export function useStore<T = AllStateInterface> () {
  return baseUseStore<T>(key)
}
