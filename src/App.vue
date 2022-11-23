<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
  import { useAuthStore } from '@/stores/modules/auth';
  import { removeInterceptor, setupInterceptors } from '@/utils/interceptors';
  import { useRouterStore } from '@/stores/modules/router';
  /* #ifdef MP-WEIXIN || MP-ALIPAY */
  import { dynamicLoadFontFace } from '@/utils/fonts';
  /* #endif */

  // Uno
  const { darkMode, statusBarHeight, menuButtonBounding } = storeToRefs(useAppStore());

  onLaunch(() => {
    console.log('App Launch');
    /** 微信小程序和阿里小程序动态远程加载字体 * */
    /* #ifdef MP-WEIXIN || MP-ALIPAY */
    // dynamicLoadFontFace();
    /* #endif */

    removeInterceptor();
    setupInterceptors();
    const appStore = useRouterStore();
    appStore.initialize();
  });

  // Uno
  onLaunch(() => {
    // #ifdef MP-WEIXIN || MP-QQ
    const systemInfo = uni.getSystemInfoSync();
    // the systemInfo.theme is only support dark mode in WeChat and QQ
    darkMode.value = systemInfo?.theme === 'dark';
    statusBarHeight.value = systemInfo!.statusBarHeight || 44;
    menuButtonBounding.value = uni.getMenuButtonBoundingClientRect();
    uni.onThemeChange((res: UniApp.OnThemeChangeCallbackResult) => (darkMode.value = res.theme === 'dark'));
    // #endif

    // #ifdef H5
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    darkMode.value = colorScheme.matches;
    colorScheme.addEventListener('change', (e: MediaQueryListEvent) => (darkMode.value = e.matches));
    // The data is obtained from iPhone13 miniprogram but statusBarHeight, top and bottom values are subtracted from the statusBarHeight value
    statusBarHeight.value = 0;
    menuButtonBounding.value = { width: 87, height: 32, left: 281, top: 4, right: 368, bottom: 36 };
    // #endif
  });

  onShow(() => {
    const authStore = useAuthStore();
    authStore.initToken();
    console.log('App Show');
  });
  onHide(() => {
    console.log('App Hide');
  });
</script>
<style>
  page {
    background-color: #f3f4f6;
  }
  @media (prefers-color-scheme: dark) {
    page {
      background-color: #222222;
    }
  }
</style>
<style lang="scss"></style>

<!-- 下面样式用来测试 PagesC CustomBar ，请删除! -->
<!-- <style lang="scss">
  /*每个页面公共css */
  @import '@/static/iconfont2/iconfont.css';

  /* #ifdef H5 */
  uni-page-head {
    display: none;
  }

  /* #endif */

  .clear-btn {
    @apply p-0;
    background: transparent;
    border: none;

    &::after {
      border: none;
    }
  }

  .bg-1 {
    @apply text-white;
    background-image: linear-gradient(134deg, #6d6be3 0%, #a565e4 100%);
  }

  .bg-2 {
    @apply text-gray-400;
    background-image: linear-gradient(134deg, #8785e4 0%, #b983ef 100%);
  }
</style> -->
