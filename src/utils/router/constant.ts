import { LOGIN_PAGE } from '@/enums/routerEnum';
import { useRouterStore } from '@/state/modules/router';
import { useRouter } from '@/hooks/router';

/**
 * 是否忽略验证
 * @param path
 * @return boolean
 */
export function isIgnoreAuth(path: string): boolean {
  const _path = filterPath(path);
  const routerStore = useRouterStore();
  const routes = routerStore.getRoutes;
  if (!routes) return false;
  const route = routes.get(_path);
  return route === undefined ? true : !!route?.meta?.ignoreAuth;
}

/**
 * 跳转登录
 * @param path
 */
export function jumpLogin(path: string) {
  const _path = path.startsWith('/') ? path : `/${path}`;
  const pathQuery = encodeURIComponent(_path);
  const router = useRouter();
  router.push(`${LOGIN_PAGE}?redirect=${pathQuery}`);
}

/**
 * 过滤url,获取path
 * @param url
 * @param prefix
 */
export function filterPath(url: string, prefix = '') {
  const path = url.split('?')[0];
  return prefix + (path.startsWith('/') ? path.substring(1) : path);
}
