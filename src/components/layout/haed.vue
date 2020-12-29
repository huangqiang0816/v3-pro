<template>
  <header class="app-header">
    <div class="image">
      <img :src="imgSrc" alt="" width="130" height="42">
    </div>
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
