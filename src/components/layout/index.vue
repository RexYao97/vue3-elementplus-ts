<script setup lang="ts">
import LayoutHeader from './components/layout-header.vue';
import LayoutMenu from './components/layout-menu.vue';
import { RouterView } from 'vue-router';
import NavTab from './components/tabNav/index.vue';
import { useStore } from '@/store/index';
import { useRouter } from 'vue-router';
import { onMounted } from '@vue/runtime-core';
const store = useStore();
import menuHook from './hook/tabAndmenuHook';
const { layoutRouteChange } = menuHook();
const { currentRoute } = useRouter();
onMounted(() => {
  // 请求菜单
  store.dispatch('getRoleInfo');
  const { path } = currentRoute.value;
  layoutRouteChange(path);
});
</script>

<template>
  <el-container class="layout">
    <el-header>
      <LayoutHeader />
    </el-header>
    <el-container class="layout-container">
      <LayoutMenu />
      <el-main class='layout-container_right'>
        <NavTab />
        <div class="layout-container_right-main">
          <RouterView></RouterView>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less" scoped>
.layout {
  height: 100%;
  width: 100%;
}
.layout-container {
  height: calc(100% - 60px);

  .layout-container_right{
    position:relative;
    height: 100%;
    .layout-container_right-main{
      height: calc(100% - 40px);
      overflow:auto;
      background-color: white;
    }
  }
}
.el-header {
  background-color: @bColor;
  border-bottom: 1px solid @borderColor;
  padding-left: 0;
  padding-right: 0;
}
.el-main {
  padding: 0;
}
</style>
