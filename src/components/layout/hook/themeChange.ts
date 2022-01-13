import { reactive, ref, computed, watchEffect } from 'vue';
import { addClass, removeClass } from '@/common/utils';
import { useI18n } from 'vue-i18n';
export default function () {
  // 语言切换
  const { locale } = useI18n();
  // 主题切换
  const themeList = reactive([
    {
      value: 'default',
      label: '默认主题',
      enlabel: 'Default Theme',
    },
    {
      value: 'theme-red',
      label: '红色主题',
      enlabel: 'Red Theme',
    },
  ]);
  // 设置主题
  function setTheme(value: string) {
    window.localStorage.setItem('theme', value);
    themeValue.value = value;
    const dom = document.querySelector('#app') || document.body;
    if (value !== 'default') {
      addClass(dom, 'theme-red');
    } else {
      removeClass(dom, 'theme-red');
    }
  }
  // 获取主题名称
  function getThemeName(themeValue: string) {
    const item = themeList.find(({ value }) => value === themeValue);
    if (item) {
      return locale.value === 'zh' ? item.label : item.enlabel;
    } else {
      return '默认主题';
    }
  }
  const themeValue = ref(window.localStorage.getItem('theme') || 'default');
  const themeLabel = computed(() => {
    return getThemeName(themeValue.value);
  });

  watchEffect(() => {
    const tValue = themeValue.value;
    setTheme(tValue);
  });
  return {
    themeList,
    themeLabel,
    themeValue,
    setTheme
  };
}
