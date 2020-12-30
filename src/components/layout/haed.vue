<template>
  <header class="app-header">
    头部
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'haed',
  props: {},
  setup () {
    return {
      imgSrc: require('@/assets/images/JSMLogo.png')
    }
  }
})
</script>
