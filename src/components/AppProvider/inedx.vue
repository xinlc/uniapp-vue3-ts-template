<script lang="ts" setup name="AppProvider">
  import type { UNotifyOptions } from '../UnoUI/UNotify/types';
  import type { UToastOptions } from '../UnoUI/UToast/types';

  const { pageReset } = usePageStore();
  const { notifyRef: _notifyRef, toastRef: _toastRef } = storeToRefs(usePageStore());
  const notifyRef = ref<{ handleShowNotify: (options: UNotifyOptions) => {} }>();
  const toastRef = ref<{ handleShowToast: (options: UToastOptions) => {} }>();

  onMounted(() => {
    _notifyRef.value = notifyRef.value;
    _toastRef.value = toastRef.value;
  });

  onShow(() => {
    _notifyRef.value = notifyRef.value;
    _toastRef.value = toastRef.value;
  });

  onUnmounted(() => pageReset());
</script>
<template>
  <view class="app-page safe-area-inset-bottom">
    <UNotify ref="notifyRef" />
    <UToast ref="toastRef" />
    <slot></slot>
  </view>
</template>
<style scoped>
  .app-page {
    padding: 12rpx 28rpx;
  }
</style>
