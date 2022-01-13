<script setup lang="ts">
import { DArrowLeft, DArrowRight } from '@element-plus/icons';
import { ref, computed } from 'vue';
import AsideSubmenu from './asideMenu/aside-submenu.vue';
import menuHook from '../hook/tabAndmenuHook';
import { useRouter } from 'vue-router';

const emit = defineEmits(['update:isMiniMenu']);
const { menuList, layoutRouteChange } = menuHook();
const props = defineProps({
  width: {
    type: String,
    default: '300px',
  },
  menuTrigger: {
    type: String,
    default: 'hover',
  },
  isMiniMenu: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String,
    default: 'vertical',
  },
});
// 当前菜单栏高亮
const { currentRoute } = useRouter();
const activeMenu = computed(() => currentRoute.value.path);
// 收缩
const innerIsMiniMenu = ref(props.isMiniMenu);
let innerWidth = computed(() => {
  if (props.mode === 'vertical' && !innerIsMiniMenu.value) {
    return props.width;
  }
  return '64px';
});
function collapseWatcher(v: boolean) {
  if (innerIsMiniMenu.value === v) return;
  innerIsMiniMenu.value = v;
  emit('update:isMiniMenu', innerIsMiniMenu.value);
}

</script>

<template>
  <el-aside
    :width="innerWidth"
    :class="{
      'aside-menu': true,
      'aside-menu--collapse': innerIsMiniMenu,
    }"
    :style="{
      height: '100%',
      position: 'relative',
    }"
  >
    <el-menu
      ref="BetterScroll"
      :style="{
        'box-size': 'border-box',
        height: '100%',
        'border-bottom': `1px solid #eee`,
      }"
      @select="layoutRouteChange"
      :mode="mode"
      :router="true"
      :collapse-transition="false"
      :menu-trigger="menuTrigger"
      :collapse="innerIsMiniMenu"
      :default-active="activeMenu"
    >
      <el-scrollbar
        ref="scrollBar"
        tag="div"
        :noresize="true"
        style="height: 100%; width: 100%"
        wrap-class="sf-aside__menu-list"
        :wrap-style="{
          'overflow-x': 'hidden',
        }"
      >
        <AsideSubmenu
          moduleCodePath="value"
          moduleNamePath="name"
          childrenPath="children"
          moduleIconPath="icon"
          v-for="item of menuList"
          :item="item"
          :key="item.value"
        />
      </el-scrollbar>
    </el-menu>
    <el-row v-if="mode === 'vertical'" class="collapse-bottom">
      <el-button type="text" @click="collapseWatcher(!innerIsMiniMenu)">
        <el-icon color="#000000" size="16">
          <d-arrow-right v-if="innerIsMiniMenu" />
          <d-arrow-left v-else />
        </el-icon>
      </el-button>
    </el-row>
  </el-aside>
</template>
<style lang="less" scoped>
.aside-menu {
  position: relative;
  padding-bottom: 44px;
}
.collapse-bottom {
  width: 100%;
  border-bottom: 1px solid @borderColor;
  position: absolute;
  bottom: 0;
  .el-button {
    width: 100%;
  }
}
</style>
