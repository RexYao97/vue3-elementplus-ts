import { useStore } from '@/store/index';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
export default function () {
  // 语言切换
  const { locale } = useI18n();
  const { state, commit, dispatch } = useStore();
  const roleInfos = computed(() =>
    state.roleInfos.map((item) => ({
      value: item.roleKey,
      label: item.roleName,
      enlabel: item.roleKey,
    }))
  );
  const currentRole = computed(() => {
    return locale.value === 'zh'
      ? state.currentRole.roleName
      : state.currentRole.roleKey;
  });
  // 修改角色
  function changeCurrentRole(value: string) {
    const item = roleInfos.value.find((item) => item.value === value);
    if (item) {
      commit('changeState', {
        currentRole: {
          roleKey: item.value,
          roleName: item.label,
        },
      });
      // 更新菜单栏
      dispatch('getMenuList');
    }
  }
  return {
    roleInfos,
    currentRole,
    changeCurrentRole,
  };
}
