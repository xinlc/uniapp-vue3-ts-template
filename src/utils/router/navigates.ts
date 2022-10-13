import { warn } from 'vue';
import { cloneDeep } from 'lodash-es';
import { NAVIGATE_TYPE } from '@/enums/routerEnum';
import { deepMerge } from '@/utils';
import { routerBeforeEach } from '@/utils/router/interceptor';
import { useRouterStore } from '@/state/modules/router';
import { filterPath } from '@/utils/router/constant';

export type NavigateOptions = Partial<Omit<UniApp.NavigateToOptions, 'url'>> & {
  delta?: number;
};

export class Navigates {
  private type: string;

  private readonly options: NavigateOptions;

  constructor(type?: string, options?: NavigateOptions) {
    this.type = type || NAVIGATE_TYPE.NAVIGATE_TO;
    this.options = options || {};
  }

  navigate(url: string, options?: NavigateOptions) {
    const navigateOptions = deepMerge(cloneDeep(this.options), options);
    const _options = deepMerge({ url }, navigateOptions);
    switch (this.type) {
      case NAVIGATE_TYPE.NAVIGATE_TO:
        uni.navigateTo(_options);
        break;
      case NAVIGATE_TYPE.REDIRECT_TO:
        uni.redirectTo(_options);
        break;
      case NAVIGATE_TYPE.RE_LAUNCH:
        uni.reLaunch(_options);
        break;
      case NAVIGATE_TYPE.SWITCH_TAB:
        uni.switchTab(_options);
        break;
      case NAVIGATE_TYPE.NAVIGATE_BACK:
        uni.navigateBack(navigateOptions);
        break;
      default:
        warn('navigate Error');
        break;
    }
  }

  /**
   * uni.navigateTo
   * @param url
   * @param options
   */
  push(url: string, options?: NavigateOptions) {
    this.type = NAVIGATE_TYPE.NAVIGATE_TO;
    this.navigate(url, options);
  }

  /**
   * uni.redirectTo
   * @param url
   * @param options
   */
  replace(url: string, options?: NavigateOptions) {
    this.type = NAVIGATE_TYPE.REDIRECT_TO;
    this.navigate(url, options);
  }

  /**
   * uni.reLaunch
   * @param url
   * @param options
   */
  replaceAll(url: string, options?: NavigateOptions) {
    this.type = NAVIGATE_TYPE.RE_LAUNCH;
    this.navigate(url, options);
  }

  /**
   * uni.switchTab
   * @param url
   * @param options
   */
  pushTab(url: string, options?: NavigateOptions) {
    // 微信小程序端uni.switchTab拦截无效处理
    /* #ifdef MP-WEIXIN */
    if (!routerBeforeEach(url)) {
      return;
    }
    /* #endif */
    this.type = NAVIGATE_TYPE.SWITCH_TAB;
    this.navigate(url, options);
  }

  /**
   * uni.navigateBack
   * @param options
   */
  back(options?: NavigateOptions) {
    this.type = NAVIGATE_TYPE.NAVIGATE_BACK;
    this.navigate('', options);
  }

  /**
   * 自动判断跳转页面 (navigateTo|switchTab)
   * @param url
   * @param options
   */
  go(url: string, options?: NavigateOptions & { replace?: boolean }) {
    const path = filterPath(url);
    const routerStore = useRouterStore();
    const routes = routerStore.getRoutes;
    const route = routes?.get(path);
    if (route?.meta?.tabBar) {
      this.pushTab(url, options);
      return;
    }
    if (options?.replace) {
      this.replace(url, options);
      return;
    }
    this.push(url, options);
  }
}
