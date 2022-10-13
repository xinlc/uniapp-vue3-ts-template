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
