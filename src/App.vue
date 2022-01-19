<script setup lang="ts">
import { computed,ref } from 'vue';
import { RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';
import zh from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
import menuConfig from './views/menuConfig.vue';
import IntersectionObserver from './views/IntersectionObserver.vue'

// const menuConfig = () => import('./views/menuConfig.vue')
type LocalKeyType = 'zh' | 'en';

const { locale } = useI18n();

const languages = {
  zh,
  en,
};

const localeComputed = computed(() => {
  return languages[locale.value as LocalKeyType];
});
// 展示
let show = ref<number>(1);
function changeShowValue(val:number){
  show.value = val;
  // if()
}
  // console.log(Trigger())
</script>

<template>
  <el-config-provider :locale="localeComputed">
    <div class='header-menu'>
      <el-button @click='changeShowValue(0)'>示例demo</el-button>
      <el-button @click='changeShowValue(1)'>IntersectionObserver</el-button>
    </div>
    <!-- <RouterView></RouterView> -->
    <!-- <div style="height:700px;overflow:auto;"> -->
    <menuConfig v-if='show===0'/>
    <IntersectionObserver v-if='show===1'/>
  </el-config-provider>
</template>

<style lang="less">
.header-menu{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index: 9999;
  padding: 10px 0;
}
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
  padding-top: 2000px;
}
</style>
