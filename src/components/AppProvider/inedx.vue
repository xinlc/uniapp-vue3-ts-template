<script lang="ts" setup name="AppProvider"></script>
<template>
  <view class="app-page safe-area-inset-bottom">
    <slot></slot>
  </view>
</template>
<style scoped>
  .app-page {
    padding: 12rpx 28rpx;
  }
</style>
