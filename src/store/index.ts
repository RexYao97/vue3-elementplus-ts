import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { cloneDeep } from 'lodash-es';
import { InjectionKey } from '@vue/runtime-core';
import createResetAndChangeState from '@/assets/ts/createResetAndChangeState';
import RootStateTypes, { AllStateTypes, MenuItem } from './type';
import tabNav from './modules/tabNav/index';
// 打平菜单栏
function normalizeMenuList(item: MenuItem, role: string, index = 0) {
  const { permission } = item;
  let data: MenuItem[] = [];
  if (!permission || permission.includes(role)) {
    item.index = index;
    data.push(item);
  }
  if (item.children && item.children.length) {
    item.children.forEach((_i) => {
      data = data.concat(normalizeMenuList(_i, role, index + 1));
    });
  }
  return data;
}
const defaultState: RootStateTypes = {
  menu: [],
  normalizeMenu: [],
  roleInfos: [],
  currentRole: {
    roleKey: 'user',
    roleName: '普通用户',
  },
};
export const store = createStore({
  state() {
    return cloneDeep(defaultState);
  },
  actions: {
    // 获取用户信息
    getRoleInfo({ commit, dispatch }) {
      const roles = [
        {
          roleKey: 'admin',
          roleName: '管理员',
        },
        { roleKey: 'user', roleName: '普通用户' },
      ];
      commit('changeState', {
        roleInfos: roles,
        currentRole: roles[0],
      });
      dispatch('getMenuList');
    },
    // 获取菜单栏
    getMenuList({ commit, state }) {
      const data: MenuItem[] = [
        {
          icon: '',
          name: '首页',
          value: '/home',
          closable: false,
        },
        {
          children: [
            {
              icon: '',
              name: '菜单配置',
              value: '/menuConfig',
              closable: true,
            },
          ],
          icon: 'sf-icon-cm-tpp-basic-info',
          name: '基础信息管里',
          value: '基础信息管里',
          permission: ['admin'],
        },
        {
          icon: 'sf-icon-cm-tpp-api-test',
          name: '数据字典',
          value: '/dataDictionaries',
          closable: true,
        },
      ];
      let normalizeMenu: MenuItem[] = [];
      data.forEach((item) => {
        normalizeMenu = normalizeMenu.concat(
          normalizeMenuList(item, state.currentRole.roleKey)
        );
      });
      console.log(normalizeMenu);
      commit('changeState', {
        menu: normalizeMenu.filter((item) => item.index === 0),
        normalizeMenu,
      });
    },
  },
  mutations: {
    ...createResetAndChangeState(defaultState),
  },
  modules: {
    tabNav,
  },
});
export const vuexKey: InjectionKey<Store<RootStateTypes>> = Symbol('vue3-vuex');

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(vuexKey);
}
