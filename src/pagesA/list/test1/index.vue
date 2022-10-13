<script lang="ts" setup>
  import BasicButton from '@/components/BasicButton/index.vue';
  import { useRouter } from '@/hooks/router';

  const router = useRouter();
  const jumpTest2 = () => {
    router.push('/pagesA/list/test2/index?id=256');
  };
</script>
<template>
  <view> Test1 </view>
  <BasicButton @click="jumpTest2">Test2 → </BasicButton>
</template>
<style scoped></style>
