<template>
  <template v-for="item in meuns" :key="item.id">
    <el-menu-item :index="item.path" v-if="!item.children">
      <template #title>{{item.title}}</template>
      <i :class="item.icon"></i>
    </el-menu-item>

    <el-submenu :index="item.path" v-else>
      <template #title>
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </template>
      <template v-for="child in item.children" :key="child.path">
        <template v-if="child.children">
          <side-bar-child :meuns="child.children" />
        </template>
        <el-menu-item :index="child.path" v-else>
          <template #title>{{item.title}}</template>
          <i :class="item.icon"></i>
        </el-menu-item>
      </template>
    </el-submenu>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  props: {
    meuns: {
      type: Array
    }
  }
})
</script>
