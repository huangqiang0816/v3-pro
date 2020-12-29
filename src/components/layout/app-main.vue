<template>
  <div class="app-main">
    主体
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'app-main',
  props: {},
  setup () {
    return {}
  }
})
</script>
