import { Navigates } from '@/utils/router/navigates';
import { useRouterStore } from '@/state/modules/router';
import { RouteLocationNormalized } from '@/types/router/route';

const router = new Navigates();

/**
 * 路由hook
 */
export function useRouter() {
  return router;
}

/**
 * 获取当前Route信息
 * 推荐在onLoad中调用此hook
 * getCurrentPages方法在不同平台有差异
 * 在微信小程序中只有在onLoad中才能获取到query
 * @return RouteLocationNormalized
 */
export function useRoute(): RouteLocationNormalized {
  const currentPages = getCurrentPages();
  const currentPage = currentPages[currentPages.length - 1];
  const path = currentPage?.route || '';
  const routerStore = useRouterStore();
  const currentRoute = routerStore.getRoutes?.get(path as string);
  let query = {};
  /* #ifndef MP-WEIXIN */
  // @ts-ignore
  query = currentPage?.$page?.options || {};
  /* #endif */

  /* #ifdef MP-WEIXIN */
  // @ts-ignore
  query = currentPage?.options || {};
  /* #endif */
  return {
    currentPages,
    currentPage,
    path,
    currentRoute,
    query,
  };
}
