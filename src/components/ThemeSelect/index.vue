<template>
  <el-select v-model="themeCurrent">
    <el-option
      v-for="item in themeList"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  watch,
} from 'vue';
import { addClass, removeClass } from '@/common/utils'

const themeList = reactive([
  {
    value: 'default',
    label: '默认主题',
  },
  {
    value: 'theme-red',
    label: '红色主题',
  },
]);

let theme = window.localStorage.getItem('theme') || 'default';


const themeCurrent = ref(theme);

watch(themeCurrent, (value) => {
  window.localStorage.setItem('theme', value);
  if (value !== 'default') {
    addClass(document.body, 'theme-red');
  } else {
    removeClass(document.body, 'theme-red');
  }
}, { immediate: true });

</script>
