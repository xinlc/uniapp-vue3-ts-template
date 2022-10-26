<script lang="ts" setup>
  import { ref, reactive, watch, onBeforeMount, onMounted, nextTick } from 'vue';

  import { useRouter } from '@/hooks/router';

  const router = useRouter();

  const props = defineProps(['pagePath']);
  const state = reactive({
    active: 0,
  });
  const menuList = [
    {
      icon: 'icon-tab_icon_home_nor',
      label: '首页',
      url: '/pagesC/index/index',
    },
    {
      icon: 'icon-tab_icon_library_nor',
      label: '功能',
      url: '/pagesC/collection/index',
    },
    {
      icon: 'icon-tab_icon_mine_nor',
      label: '我的',
      url: '/pagesC/user/index',
    },
  ];

  const route = (item, i) => {
    router.push(item.url);

    // uni.switchTab({
    //   url: item.url,
    // });

    // changeRoute()
    // if (type === 'collection') {
    //     nowRoute.value = 'collection'
    //     emits('changeRoute', 'collection')
    // } else if (type === 'index') {
    //     nowRoute.value = 'index'
    //     emits('changeRoute', 'index')
    // } else {
    //     nowRoute.value = 'user-store'
    //     emits('changeRoute', 'user-store')
    // }
  };
  const changeRoute = () => {
    nextTick(() => {
      let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
      let curRoute = routes[routes.length - 1].route; // 获取当前页面路由，也就是最后一个打开的页面路由
      console.log(curRoute);
      for (let i = 0; i < menuList.length; i++) {
        if (curRoute === menuList[i].url) {
          state.active = i;
          break;
        }
      }
    });
  };
  onBeforeMount(() => {
    uni.hideTabBar({
      animation: false,
    });
  });
  onMounted(() => {});
</script>

<template>
  <view class="h-20">
    <view class="bg-white rounded-t-2xl w-full bottom-0 fixed content">
      <view class="flex w-full justify-around">
        <view v-for="(item, i) of menuList" :key="i" class="w-1/3" @tap="route(item, i)">
          <view class="flex justify-center">
            <text :class="[item.icon, { selected: props.pagePath === item.url }]" class="text-2xl iconfont"></text>
          </view>
          <view :class="{ 'text-purple-600': props.pagePath === item.url }" class="flex justify-center"
            >{{ item.label }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .content {
    padding-bottom: calc(env(safe-area-inset-bottom) + 0rpx);
  }

  .selected {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(0deg, #a6e4ff 0%, #f096ff 100%);
  }
</style>
