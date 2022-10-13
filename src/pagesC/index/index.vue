<script setup lang="ts">
  import { reactive } from 'vue';
  import tabBar from '@/components/CustomBar/tabBar.vue';
  import navBar from '@/components/CustomBar/navBar.vue';
</script>

<template>
  <navBar />
  <image class="" src="@/static/logo.png" mode="scaleToFill" />
  <tab-bar pagePath="/pagesC/index/index"></tab-bar>
</template>

<style lang="scss"></style>
