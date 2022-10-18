<script setup lang="ts">
  let { statusBarHeight } = uni.getSystemInfoSync();
</script>

<template>
  <view :style="{ height: statusBarHeight + 'px' }"></view>
  <view class="flex ml-3 w-full justify-start">
    <view class="flex p-1 items-center">
      <image class="rounded-1/2 h-10 w-10" src="@/static/logo.png" mode="scaleToFill" />
      <view class="text-xl pl-3">测试自定义bar</view>
    </view>
  </view>
</template>
