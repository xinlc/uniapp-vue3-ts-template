<script lang="ts" setup>
  import BasicButton from '@/components/BasicButton/index.vue';
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import { useRouter } from '@/hooks/router';

  const router = useRouter();
  const jumpList1 = () => {
    router.push('/pagesA/list/test1/index?key=words&page=1&limit=15');
  };
  const jumpFontAwesomeIcon = () => {
    router.push('/demo/example/fontAwesomeIcon/index');
  };
  const jumpPageC = () => {
    router.push('/pagesC/index/index');
  };

  const jumpPageUno = () => {
    router.push('/pagesUno/splash/splash');
  };
</script>

<template>
  <AppProvider>
    <view class="container"> 页面构建中... </view>
    <view class="flex justify-center">
      <BasicButton @click="jumpList1">List1 → </BasicButton>
    </view>
    <view class="flex justify-center">
      <BasicButton @click="jumpFontAwesomeIcon">FontAwesomeIcon → </BasicButton>
    </view>
    <view class="flex justify-center">
      <BasicButton @click="jumpPageC">jumpPageC → </BasicButton>
    </view>

    <view class="flex justify-center">
      <BasicButton @click="jumpPageUno">jumpPageUno → </BasicButton>
    </view>

    <view class="flex justify-center">
      测试 uni-ui ->
      <uni-icons type="contact" size="30"></uni-icons>
      <uni-badge text="2" type="success"></uni-badge>
    </view>
  </AppProvider>
</template>

<style lang="scss" scoped>
  .container {
    padding: 128rpx 0;
    text-align: center;
  }
</style>
