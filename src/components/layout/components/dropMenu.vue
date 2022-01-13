<script setup lang="ts">
import {ArrowDown} from '@element-plus/icons'
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

interface Props {
  menuName: string;
  option: Array<{
    value: string;
    label: string;
    enlabel: string;
  }>;
}

const emits = defineEmits(['command'])
withDefaults(defineProps<Props>(), {
  menuName: 'Dropdown',
  option: () => [],
});

function command(value:string){
  emits('command',value)
}
</script>

<template>
  <el-dropdown  @command="command">
    <span class="el-dropdown-link" >
      {{ menuName }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu >
        <el-dropdown-item v-for="item of option" :key="item.value" :command='item.value'>{{
          locale === 'zh' ? item.label : item.enlabel
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style lang="less" scoped>

.el-dropdown + .el-dropdown{
  margin-left: 20px;

}
.el-dropdown-link{
    line-height: 16px;
  }
</style>
