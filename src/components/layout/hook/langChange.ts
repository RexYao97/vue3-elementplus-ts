import { useI18n } from 'vue-i18n';
import { reactive,  computed } from 'vue';
export default function (){
  // 语言切换
const { locale } = useI18n();
const langList = reactive([
  {
    value: 'zh',
    label: '中文',
    enlabel: '中文',
  },
  {
    value: 'en',
    label: 'English',
    enlabel: 'English',
  },
]);
const langCurrent = computed(() => {
  const item = langList.find(({ value }) => value === locale.value);
  if (item) {
    return item.label;
  }
  return '语言';
});

function changeLange(value: string) {
  locale.value = value;
  window.localStorage.setItem('language', value);
}
  return {
    langCurrent,
    langList,
    changeLange
  }
}