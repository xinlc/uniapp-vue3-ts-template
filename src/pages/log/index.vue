<template>
  <view style="line-height: 88rpx; text-align: center">登录后访问log</view>
</template>

<script lang="ts" setup>
  import { onLoad } from '@dcloudio/uni-app';

  onLoad(query => {
    console.log('log onLoad', query);
  });
</script>

<style lang="scss" scoped></style>
