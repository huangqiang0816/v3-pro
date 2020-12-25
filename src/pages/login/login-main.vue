<template>
  <div>登录页面</div>
  <button @click="login">点击登录</button>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const login = () => {
      router.push({
        path: "/",
      });
    };
    return {
      login,
    };
  },
};
</script>

<style>
</style>