<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
  import { useAuthStore } from '@/state/modules/auth';
  import { removeInterceptor, setupInterceptors } from '@/utils/interceptors';
  import { useRouterStore } from '@/state/modules/router';
  /* #ifdef MP-WEIXIN || MP-ALIPAY */
  import { dynamicLoadFontFace } from '@/utils/fonts';
  /* #endif */

  onLaunch(() => {
    console.log('App Launch');
    /** 微信小程序和阿里小程序动态远程加载字体 * */
    /* #ifdef MP-WEIXIN || MP-ALIPAY */
    dynamicLoadFontFace();
    /* #endif */
    removeInterceptor();

    setupInterceptors();
    const appStore = useRouterStore();
    appStore.initialize();
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
<style lang="scss">
  page {
    background-color: #f2f2f2;
  }
</style>
