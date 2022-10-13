<script lang="ts" setup>
  import { buttonProps } from '@/components/BasicButton/prpos';

  const props = defineProps(buttonProps);
  const emits = defineEmits(['click']);
  const click = () => {
    emits('click');
  };
</script>

<template>
  <view class="default-btn" :disabled="props.disabled" @tap="click">
    <slot></slot>
  </view>
</template>

<style lang="scss" scoped>
  .default-btn {
    color: $uni-text-color-inverse;
    border-width: 4rpx;
    border-color: $nui-button-border-color;
    border-style: solid;
    border-radius: $uni-border-radius-base;
    background-color: $nui-button-bg-color;
    padding: 12rpx 26rpx;
    display: inline-block;
    font-size: $uni-font-size-sm;
    &:hover {
      background-color: $nui-button-bg-hover-color;
    }
  }
</style>
