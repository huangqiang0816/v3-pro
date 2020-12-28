<template>
  <div>dashboard</div>
  <button @click="taiozhuan">跳转</button>

  <div class="box" @click="parentCLick">
    111222
    <div class="child" @click="childClick">child</div>
  </div>
  <div class="doule">bohsl</div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const parentCLick = () => {
      console.log('parentCLick')
    }
    const childClick = (e) => {
      e.stopPropagation()
      console.log('childClick')
    }
    const taiozhuan = () => {
      window.localStorage.setItem('id', '11')
      router.push({
        path: '/details'
      })
    }
    return {
      taiozhuan,
      parentCLick,
      childClick
    }
  }
}
</script>
