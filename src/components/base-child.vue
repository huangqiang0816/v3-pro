<template>
  <p>我来接受props 的值{{name}}</p>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import type { PropType } from 'vue'

type nameType = PropType<'test'| '一个人'>

export default defineComponent({

  props: {
    name: String as nameType,
  },

  setup(props, context) {
    const testmethods = () => {
      nextTick(() => {
        console.log("我是nextTick的数据", props.name);
      });
      console.log(props.name);
      console.log("我是子组件的方法");
    };
    return {
      testmethods,
    };
  },
});
</script>

<style>
</style>