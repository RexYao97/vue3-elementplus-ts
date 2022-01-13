<script setup lang="ts">
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';
import zh from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';

type LocalKeyType = 'zh' | 'en';

const { locale } = useI18n();

const languages = {
  zh,
  en,
};

const localeComputed = computed(() => {
  return languages[locale.value as LocalKeyType];
});
</script>

<template>
  <el-config-provider :locale="localeComputed">
    <RouterView></RouterView>
  </el-config-provider>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 1200px;
  min-height: 800px;
}
</style>
