import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import i18n from './lang';
import App from './App.vue';
import 'element-plus/dist/index.css';
import './assets/less/common.less'
import router from '@/route/index';
import { vuexKey, store } from './store/index';
import './theme/theme-red.scss';

const app = createApp(App).use(ElementPlus).use(i18n).use(router).use(store, vuexKey);
import 'dayjs/locale/zh-cn'

// 等路由ready以后再进行挂载组件
router.isReady().then(() => {
  app.mount('#app');
});
// 错误捕捉
router.onError((err) => { console.error(err); });
