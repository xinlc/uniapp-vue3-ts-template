<script setup lang="ts">
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import tabBar from '@/components/CustomBar/tabBar.vue';

  import { useI18n } from 'vue-i18n';
  const router = useRouter();
  const { t } = useI18n();
  const { showToast } = usePageStore();

  const handleNavigateToFunction = () => {
    router.push('/pagesC/collection/index');
  };
  const handleShowToast = () => {
    showToast({ type: 'default', message: t('common.offline') });
  };
</script>

<template>
  <AppProvider>
    <view class="w-screen h-screen flex flex-col items-center justify-center">
      <text @tap="handleNavigateToFunction" class="bg-blue text-white px-2 py-1 rounded">到功能页</text>
      <text @tap="handleShowToast" class="bg-blue text-white px-2 py-1 rounded mt-4">show toast</text>
    </view>
  </AppProvider>
  <tab-bar pagePath="/pagesC/index/index"></tab-bar>
</template>

<style lang="scss"></style>
