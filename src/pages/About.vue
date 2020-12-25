<template>
  <div>
    <baseChild :name="state.normal" ref="child" />
    <el-button type="primary" @click="showEffect">设置token{{state.normal}}</el-button>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, ref, watchEffect } from "vue";
import baseChild from "@/components/base-child.vue";
import { useStore } from 'vuex'
interface stateInterFace {
  normal: string;
}

export default {
  components: {
    baseChild,
  },
  setup(ctx: any) {

    const store = useStore()
    const count = ref(0);
    const child = ref();
    const state = reactive({
      normal: "一个人",
    });

    const showEffect = () => {
      store.dispatch('setUserToken', '465464')
      state.normal = "a";
      child.value.testmethods();
    };

    return {
      showEffect,
      state,
      child,
    };
  },
};
</script>

<style>
</style>