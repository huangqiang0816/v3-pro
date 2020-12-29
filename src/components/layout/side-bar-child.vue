<template>
  <template v-for="item in meuns" :key="item.id">
    <el-menu-item :index="item.path" v-if="!item.children">
      <template #title>{{item.title}}</template>
      <router-link :to="item.path">
        <i :class="item.icon"></i>
      </router-link>
    </el-menu-item>

    <el-submenu :index="item.path" v-else>
      <template #title>
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </template>
      <template v-for="child in item.children" :key="child.path">
        <template v-if="child.children">
          <side-bar-child :meuns="child" />
        </template>
        <el-menu-item :index="child.path" v-else>
          <template #title>{{item.title}}</template>
          <router-link :to="item.path">
            <i :class="item.icon"></i>
          </router-link>
        </el-menu-item>
      </template>
    </el-submenu>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface MenuItemInterface {
  id: string;
  path: string;
  title: string;
  icon: string;
  children?: MenuItemInterface[];
}
export default defineComponent({
  name: '',
  props: {
    meuns: {
      type: Array as PropType<MenuItemInterface[]>
    }
  }
})
</script>
