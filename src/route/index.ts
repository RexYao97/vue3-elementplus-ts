import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import layout from '@/components/layout/index.vue';
import home from '@/views/home.vue';
import menuConfig from '@/views/menuConfig.vue';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/home',
        name: '首页',
        component: home,
      },
      {
        path: '/menuConfig',
        name: '菜单配置',
        component: menuConfig,
      },
      {
        path: '/dataDictionaries',
        name: '数据字典',
        component: menuConfig,
      },
    ],
    redirect:'/home'
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
