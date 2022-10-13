import { types } from 'sass';
import Boolean = types.Boolean;

export interface Route extends Record<string, any> {
  path: string;
  meta?: {
    ignoreAuth?: boolean;
    tabBar: boolean;
  };
  style: {
    navigationBarTitleText: string;
    [key: string]: string | boolean;
  };
}

export interface SubPackages {
  root: string;
  pages: Route[];
}

export interface RouteLocationNormalized {
  /* 当前页面栈的实例 */
  currentPages: Page.PageInstance<AnyObject, {}>[];
  /* 当前页面的实例 */
  currentPage: Page.PageInstance;
  /* 当前页面在pages.json中的配置 */
  currentRoute?: Route;
  /* 当前页面的path */
  path?: string;
  /* 当前页面的url参数 */
  query: Record<string, string | string[]>;
}
