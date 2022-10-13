import {
  HOME_PAGE,
  NAVIGATE_TYPE_LIST,
  NOT_FOUND_PAGE,
} from '@/enums/routerEnum';
import { useAuthStore } from '@/state/modules/auth';
import { isIgnoreAuth, jumpLogin } from '@/utils/router/constant';

/**
 * 路由跳转前拦截
 * @param path
 * @return boolean
 */

export function routerBeforeEach(path: string): boolean {
  const isIgnore = isIgnoreAuth(path);
  if (isIgnore) return true;
  const authStore = useAuthStore();
  if (authStore.isLogin) return true;
  jumpLogin(path);
  return false;
}

/**
 * 添加拦截器
 * 微信小程序端uni.switchTab拦截无效, 已在api中拦截
 * 微信小程序原生tabbar请使用onShow
 * 微信小程序端 <navigator>拦截无效,请使用api
 * @param routerName
 * @export void
 */
function addInterceptor(routerName: string) {
  uni.addInterceptor(routerName, {
    // 跳转前拦截
    invoke: args => {
      const flag = routerBeforeEach(args.url);
      return flag ? args : false;
    },
    // 成功回调拦截
    success: () => {},
    // 失败回调拦截
    fail: (err: any) => {
      let reg: RegExp;
      /* #ifdef MP-WEIXIN */
      reg = /(.*)?(fail page ")(.*)(" is not found$)/;
      /* #endif */
      /* #ifndef MP-WEIXIN */
      reg = /(.*)?(fail page `)(.*)(` is not found$)/;
      /* #endif */
      if (reg.test(err.errMsg)) {
        const go = err.errMsg.replace(reg, '$3') || '';
        uni.navigateTo({
          url: `${NOT_FOUND_PAGE}?redirect=${HOME_PAGE}&go=${go}`,
        });
      }
      return false;
    },
    // 完成回调拦截
    complete: () => {},
  });
}

/**
 * 添加路由拦截器
 */
export function routerInterceptor() {
  NAVIGATE_TYPE_LIST.forEach(item => {
    addInterceptor(item);
  });
}

/**
 * 移除路由拦截器
 */
export function routerRemoveInterceptor() {
  NAVIGATE_TYPE_LIST.forEach(item => {
    uni.removeInterceptor(item);
  });
}
