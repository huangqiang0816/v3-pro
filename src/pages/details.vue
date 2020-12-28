<template>
  <div>details</div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      console.log(window.localStorage.getItem('id'))
    })
  }
}

</script>

<style>

</style>
