<template>
  <div class="layout-container">
    <layouSidebar />
    <section class="layout-content">
      <layouHeader />
      <layouMain />
    </section>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import layouHeader from '@/components/layout/haed'
import layouSidebar from '@/components/layout/side-bar'
import layouMain from '@/components/layout/app-main'
export default defineComponent({
  name: 'lauout',
  components: {
    layouHeader,
    layouSidebar,
    layouMain
  }
})
</script>
