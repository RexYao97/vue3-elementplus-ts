<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useStore } from '@/store/index';
import { TabPaneProps } from 'element-plus';
import tabAndmenuHook from '../../hook/tabAndmenuHook';
const router = useRouter();
const { currentRoute, push } = router;
const { removeTabs } = tabAndmenuHook();
const store = useStore();
const tabs = computed(() => store.state.tabNav.tabs);
const activeTab = computed(() => currentRoute.value.path);
function tabClick({ props }: { props: TabPaneProps }) {
  const path = props.name;
  push(path);
}
function tabRemove(path:string) {
  removeTabs(path, currentRoute.value.path, router);
}
</script>

<template>
  <!-- 顶部菜单条 -->
  <el-tabs
    class="top-tabs"
    :tabs="tabs"
    :activeName="activeTab"
    @tab-click="tabClick"
    @tab-remove="tabRemove"
  >
    <el-tab-pane
      v-for="item of tabs"
      :closable="item.closable"
      :label="item.label"
      :name="item.name"
      :key="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>
<style lang="less" scoped>
.top-tabs.el-tabs {
  width: 100%;
  :deep(.el-tabs__header) {
    margin-bottom: 0;
    background-color: #f7f8f9;
    .el-tabs__nav-scroll {
      padding: 0 7.5px;
      .el-tabs__active-bar {
        height: 0;
      }
      .el-tabs__item {
        border: 1px #d5d9e0 solid;
        border-bottom-width: 0px;
      
        box-sizing: border-box;
        color: #606266;
        & +  .el-tabs__item{
          border-left: none;
        }
        &.is-top:nth-child(2) {
          padding-left: 20px;
        }
        &.is-top:last-child {
          padding-right: 20px;
        }
        &.is-active {
          background-color: #fff;
          color: #1d222e;
        }
      }
    }
  }
}
</style>
