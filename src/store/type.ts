import { LocalType } from '@/assets/local/type';
import tabNav from './modules/tabNav/type';
export interface MenuItem {
  children?: MenuItem[];
  icon: string;
  name: string;
  value: string;
  closable?:boolean
  // 权限控制
  permission?:string[]
  index?:number;
}
export interface Role{
  roleName:string;
  roleKey:string;
}
export default interface RootStateTypes {
  // locale: LocalType;
  menu: MenuItem[];
  normalizeMenu:MenuItem[]
  roleInfos:Role[],
  currentRole:Role
}
export interface AllStateTypes extends RootStateTypes {
  tabNav: tabNav;
}
