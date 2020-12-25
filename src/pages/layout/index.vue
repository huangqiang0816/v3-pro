<template>
  <layoutHeader />
  <div class="layout-container">
    <sideBar />
    <appMain />
  </div>
</template>

<script>
import layoutHeader from "@/components/layout/head";
import sideBar from "@/components/layout/side-bar";
import appMain from "@/components/layout/app-main";

export default {
  components: {
    layoutHeader,
    sideBar,
    appMain,
  },
};
</script>

<style>
</style>