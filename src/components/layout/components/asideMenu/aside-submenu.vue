<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { Menu as IconMenu } from '@element-plus/icons';
import AsideSubmenuItem from './aside-submenu-item.vue';
export default defineComponent({
  name: 'aside-submenu',
  components: {
    AsideSubmenuItem,
    IconMenu,
  },
  props: {
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
    childrenPath: {
      type: String,
      default: 'childrenPath',
    },
    menuIndex:{
      type:Number,
      default:0
    }
  },
  setup(props) {
    const { item, childrenPath, moduleCodePath, moduleNamePath,menuIndex } =
      toRefs(props);
    return {
      isSubMenu: item.value[childrenPath.value] && !!item.value[childrenPath.value].length,
      moduleName: item.value[moduleNamePath.value],
      index: item.value[moduleCodePath.value],
      childMenu: item.value[childrenPath.value] || [],
      menuIndex,
    };
  },
});
</script>

<template>
  <el-sub-menu :index="index" v-if="isSubMenu" :class='`aside-submenu_${menuIndex}`'>
    <template #title>
      <el-icon><IconMenu /></el-icon>
      <span class="el-sub-menu_module-name" style="user-select: none">
        {{ moduleName }}
      </span>
    </template>
    <aside-submenu
      v-for="item of childMenu"
      :key="item[moduleCodePath]"
      :item="item"
      :moduleCodePath="moduleCodePath"
      :moduleNamePath="moduleNamePath"
      :childrenPath='childrenPath'
      :menuIndex='menuIndex+1'
    ></aside-submenu>
  </el-sub-menu>
  <AsideSubmenuItem
    v-else
    :item="item"
    :moduleCodePath="moduleCodePath"
    :moduleNamePath="moduleNamePath"
    :menuIndex='menuIndex'
  ></AsideSubmenuItem>
</template>
<style lang="less" scoped >
.el-menu--collapse  .el-sub-menu {
  .el-sub-menu_module-name {
    display: none;
  }
  :deep(.el-sub-menu__icon-arrow) {
    display: none;
  }
}
</style>
