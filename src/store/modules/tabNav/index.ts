import createResetAndChangeState from '@/assets/ts/createResetAndChangeState';
import { Module } from 'vuex';
import { cloneDeep } from 'lodash-es';
import State from './type';
import RootState from '@/store/type';
const defaultState: State = {
  tabs: [],
};
const store: Module<State, RootState> = {
  namespaced: true,
  state() {
    return cloneDeep(defaultState);
  },
  mutations: {
    ...createResetAndChangeState(defaultState),
    ADD_TABS(state, view) {
      if (state.tabs.findIndex((item) => view.name === item.name) > -1) return;
      state.tabs.push(view);
    },
    // 删除Tabs
    DELET_TABS(state,path){
      const tabs = [
        ...state.tabs
      ]
      const index = tabs.findIndex((item) => path === item.name)
      if (index === -1) return ;
      tabs.splice(index,1);
      state.tabs = tabs
    }
  },
};
export default store;
