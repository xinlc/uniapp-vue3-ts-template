<script setup lang="ts">
  import { ref } from 'vue';
  import BasicButton from '@/components/BasicButton/index.vue';
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import FontAwesomeIcon from '@/components/FontAwesomeIcon/index.vue';
  import { useRouter } from '@/hooks/router';
  import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
  import { judgePlatform } from '@/utils/platform';

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  console.log(t('home.homeTitle'));

  const title = ref('uni-app vue3 ts --Vite');

  const platform = CURRENT_PLATFORM;

  const isVue3 = judgePlatform(PLATFORMS.VUE3);

  const router = useRouter();
  const handleGetStarted = () => {
    router.pushTab('/pages/demo/index');
  };
</script>
<template>
  <AppProvider>
    <view class="content">
      <image class="logo" src="/static/svg/LOGO.svg" />
      <view class="text-area">
        <text class="">{{ title }}</text>
      </view>
      <view class="text-area">
        <text class="">是否是Vue3: {{ isVue3 }}</text>
      </view>
      <view> <FontAwesomeIcon name="house" />solid (默认)</view>
      <view class="text-area">
        <text class="">当前平台: {{ platform }}</text>
      </view>
      <BasicButton @click="handleGetStarted">Get Started → </BasicButton>
    </view>
  </AppProvider>
</template>
<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-image: url($image-path + '/static/images/currency/bg.png');
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 280rpx auto 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
    margin-bottom: 60rpx;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
