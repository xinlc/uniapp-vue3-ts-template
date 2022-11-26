<script setup lang="ts">
  import { IMAGE_URL } from '@/config/app';
  import { useBaseProps } from '../composables/useLayer';
  import { BooleanProp, StringProp, NumberishProp } from '../composables/useProps';

  const props = defineProps({
    ...useBaseProps(),
    src: StringProp,
    width: NumberishProp,
    height: NumberishProp,
    remote: BooleanProp,
    mode: NumberishProp,
    circle: BooleanProp,
  });

  const handleSrc = computed(() => {
    if (!props.remote) {
      return props.src;
    }

    return IMAGE_URL + props.src;
  });

  const emits = defineEmits(['click']);

  const handleClick = (e: MouseEvent) => {
    emits('click', e);
  };
</script>
<template>
  <image
    class="u-image"
    :class="[cc, { 'rounded-1/2': circle }]"
    :style="[cs, width ? { width } : '', height ? { height } : '']"
    :src="handleSrc"
    :mode="mode"
    @click="handleClick"
  >
    <slot />
  </image>
</template>

<style lang="scss" scoped>
  .u-image {
    display: block;
  }
</style>
