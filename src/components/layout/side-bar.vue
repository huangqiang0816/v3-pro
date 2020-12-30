<template>
  <div class="app-sidebar" :class="{'close': isFold}">
    <div class="image">
      <img :src="isFold ? imgSrc1 : imgSrc" alt="" v-bind="isFold ? closeStyle: openStyle ">
    </div>
    <sideBarItem />
    <div class="check_btn">
      <el-button @click="checkMeun" type="text" icon="iconfont icon-shouqi" :class="{'trans': isFold}"></el-button>
    </div>
  </div>
</template>

<script lang="ts">
import sideBarItem from './side-bar-item.vue'
import { useStore } from '@/store'
import { SET_FOLD } from '@/store/sys/actionType'
import { AllStateInterface } from '@/types/store'
import { computed, defineComponent } from 'vue'

import { Store } from 'vuex'

export default defineComponent({
  name: 'side-bar',
  props: {},
  components: { sideBarItem },
  setup () {
    const store: Store<AllStateInterface> = useStore()
    /**
     * 切换菜单栏的Fold
     */
    const checkMeun = (): void => {
      store.dispatch(SET_FOLD)
    }

    const openStyle = {
      width: 140,
      height: 42
      // backgroundImage: `url(${imgSrc})`
    }
    const closeStyle = {
      width: 42,
      height: 42
    }

    return {
      checkMeun,
      closeStyle,
      openStyle,
      imgSrc1: require('@/assets/logo.png'),
      imgSrc: require('@/assets/images/JSMLogo.png'),
      isFold: computed(() => store.state.sys.fold)
    }
  }
})
</script>
