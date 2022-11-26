<script setup lang="ts">
  import { useBaseProps } from '../composables/useLayer';
  import { BooleanProp, SizeProp, StringProp, VariantProp } from '../composables/useProps';

  const props = defineProps({
    ...useBaseProps(),
    size: SizeProp,
    variant: VariantProp,
    disabled: BooleanProp,
    icon: StringProp,
    iconOnly: BooleanProp,
    openType: StringProp,
    block: BooleanProp,
    loading: BooleanProp,
  });

  const emits = defineEmits(['click']);

  const isDisabled = computed(() => props.loading || props.disabled);

  const handleClick = (e: MouseEvent) => {
    if (isDisabled.value) return;
    emits('click', e);
  };
</script>

<template>
  <button
    class="button-base"
    :class="[
      `u-${color}`,
      { 'w-full': block },
      `button-${size}`,
      { 'p1 aspect-square': iconOnly },
      `u-${variant}`,
      { 'u-disabled': isDisabled },
      cc,
    ]"
    :hover-class="isDisabled ? '' : variant === 'text' ? 'button-text-hover' : 'button-hover'"
    :open-type="openType"
    :style="cs"
    @click="handleClick"
  >
    <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
    <div v-else-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .button-base {
    @apply flex
      justify-center
      gap1
      items-center
      rounded-3xl
      box-border
      border
      after:display-none
      u-transition
      dark:bg-op80
      dark:border-op80
      dark:text-op80;
  }

  .button-hover {
    @apply bg-op70 border-op0 op70;
  }

  .button-text-hover {
    @apply text-op70;
  }

  .button-xs {
    @apply px2 py1 text-xs;
  }
  .button-sm {
    @apply px3 py1.5 text-sm;
  }
  .button-md {
    @apply px4 py2 text-base;
  }
  .button-lg {
    @apply px4 py2 text-lg;
  }
</style>
