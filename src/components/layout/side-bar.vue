<template>
  <div :class="['layout_sidebar', isFold ? 'open' : 'close']">
    <p>我是sidebar</p>
    <button @click="changeFold">切换</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, reactive, watch } from "vue";
import { useStore } from "@/store";
import { IAllstate } from "@/store/type";
import { Store } from "vuex";

export default defineComponent({
  name: "sideBar",
  setup() {
    const store: Store<IAllstate> = useStore();
    // 开关逻辑
    const isFold = computed(() => store.state.sys.fold);
    const changeFold = () => {
      store.dispatch("sys/changeFold");
    };
    return {
      changeFold,
      isFold,
    };
  },
});
</script>

<style>
</style>