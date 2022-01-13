<script setup lang="ts">
import DropMenuVue from './dropMenu.vue';
import useThemeChange from '../hook/themeChange';
import useLangChange from '../hook/langChange';
import roleHook from '../hook/roleHook';
const { themeList, themeLabel, setTheme } = useThemeChange();
const { langCurrent, changeLange, langList } = useLangChange();
const { roleInfos, currentRole, changeCurrentRole } = roleHook();
</script>

<template>
  <el-row class="layout-header" type="flex" align="middle">
    <el-row class="header-logo">{{ $t('common.pageTitle') }}</el-row>
    <el-row class="header-tools" type="flex" justify="end">
      <DropMenuVue
        :menuName="themeLabel"
        :option="themeList"
        @command="setTheme"
      />
      <DropMenuVue
        :menuName="langCurrent"
        :option="langList"
        @command="changeLange"
      />

      <DropMenuVue
        :menuName="currentRole"
        :option="roleInfos"
        @command="changeCurrentRole"
      />
    </el-row>
  </el-row>
</template>
<style lang="less" scoped>
.layout-header {
  width: 100%;
  height: 100%;
  background-color: var(--el-color-primary);
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;
  .header-logo {
    width: 300px;
  }
  .header-tools {
    width: calc(100% - 300px);
    :deep(.el-dropdown-link) {
      color: #fff;
    }
  }
}
</style>
