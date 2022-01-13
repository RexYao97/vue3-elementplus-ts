<template>
  <el-select v-model="langCurrent">
    <el-option
      v-for="item in langList"
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
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const langList = reactive([
  {
    value: 'zh',
    label: '中文',
  },
  {
    value: 'en',
    label: 'English',
  },
]);

const langCurrent = ref(locale.value);

watch(langCurrent, (value) => {
  // console.log('changed', value);
  locale.value = value;
  window.localStorage.setItem('language', value);
});

</script>
