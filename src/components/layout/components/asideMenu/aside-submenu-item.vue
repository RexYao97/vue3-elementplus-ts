<script setup lang="ts">
const { item, moduleCodePath, moduleNamePath, menuIndex } = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  moduleCodePath: {
    type: String,
    default: 'moduleCode',
  },
  moduleNamePath: {
    type: String,
    default: 'moduleName',
  },
  menuIndex: {
    type: Number,
    default: 0,
  },
});
const index = item[moduleCodePath];

const moduleName = item[moduleNamePath];
function clickHandle() {}
</script>

<template>
  <el-menu-item :index="index" @click="clickHandle" :class='`aside-submenu-item_${menuIndex}`'>
    <span slot="title" style="user-select: none">
      {{ moduleName }}
    </span>
  </el-menu-item>
</template>
