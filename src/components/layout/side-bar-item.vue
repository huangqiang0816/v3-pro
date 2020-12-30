<template>
  <el-menu class="menus-container" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="false">
    <SideItem :meuns="meuns" />
  </el-menu>
</template>

<script lang="ts">
import store from '@/store'
import SideItem from './side-bar-child.vue'
import { computed, defineComponent } from 'vue'
const meuns = [
  {
    id: '11',
    path: '/first',
    icon: 'el-icon-document',
    title: '选项1',
    children: [
      {
        id: '23',
        path: '/chid1',
        icon: 'el-icon-document',
        title: '选项2'
      },
      {
        id: '22',
        path: '/chid2',
        icon: 'el-icon-document',
        title: '选项2'
      }
    ]
  },
  {
    id: '22',
    path: '/first1',
    icon: 'el-icon-document',
    title: '选项2'
  },
  {
    id: '33',
    path: '/first3',
    icon: 'el-icon-document',
    title: '选项3'
  }
]
// interface MenuItemInterface {
//   id: string;
//   path: string;
//   title: string;
//   icon: string;
//   children?: MenuItemInterface[];
// }

export default defineComponent({
  functional: true,
  name: 'side-bar-item',
  components: { SideItem },
  setup () {
    const handleClose = () => {
      console.log('close')
    }

    const handleOpen = () => {
      console.log('open')
    }
    return {
      handleOpen,
      meuns,
      isCollapse: computed(() => store.state.sys.fold),
      handleClose
    }
  }
})
</script>
