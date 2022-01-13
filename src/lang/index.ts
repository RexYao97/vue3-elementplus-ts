import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';

// 设置语言，默认中文
let langBrow = 'zh';
const navLang = navigator.language;
if (navLang === 'en-US') {
  langBrow = 'en';
}
const lang = window.localStorage.getItem('language') || langBrow;

const i18n = createI18n({
  //默认显示的语言
  locale: lang,
  messages: {
    zh,
    en,
  },
});

export default i18n;
