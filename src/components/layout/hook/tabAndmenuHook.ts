import { useStore } from '@/store/index';
import { computed } from 'vue';
import {Router} from 'vue-router'
export default function () {
  const store = useStore();
  const menuList = computed(() => {
  
    return store.state.menu;
  });

  // 新增tab
  function layoutRouteChange(path: string) {
    const normalizeMenu = store.state.normalizeMenu;
    const item = normalizeMenu.find((item) => {
      return item.value === path;
    });
    if (item) {
      store.commit('tabNav/ADD_TABS', {
        label: item.name,
        name: item.value,
        closable: !!item.closable,
      });
    }
  }
  // 移除tab
  function removeTabs(path: string,currentPath:string,router:Router) {
    const tabs =  store.state.tabNav.tabs;
    const cacheIndex = tabs.findIndex((item) => currentPath === item.name)
    store.commit('tabNav/DELET_TABS', path);
    const {push} = router
    
    if (path === currentPath && tabs.length) {
      let newPath = tabs[0].name;
      if(cacheIndex > 0) {
        newPath = tabs[cacheIndex-1].name;
      }
      push(newPath)
    }
  }
  return {
    menuList,
    layoutRouteChange,
    removeTabs
  };
}
