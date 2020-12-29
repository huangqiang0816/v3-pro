<template>
  <div class="app-sidebar" :class="{'close': isFold}">
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

    return {
      checkMeun,
      isFold: computed(() => store.state.sys.fold),
      btnName: computed(() => (store.state.sys.fold ? '展开' : '收起'))
    }
  }
})
</script>
