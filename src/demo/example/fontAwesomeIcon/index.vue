<script lang="ts" setup>
  import { ref } from 'vue';
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import FontAwesomeIcon from '@/components/FontAwesomeIcon/index.vue';
  import { SetClipboardData } from '@/utils/uniapi';
  import { useRouter } from '@/hooks/router';

  const iconLink = ref('https://fontawesome.com/icons');
  const route = useRouter();

  const onCopyLink = () => {
    SetClipboardData(iconLink.value);
  };
  const onOpen = () => {
    /* #ifdef H5 */
    window.open(iconLink.value);
    /* #endif */
    /* #ifndef H5 */
    onCopyLink();
    /* #endif */
  };
  const jumpCheck = () => {
    route.push('/demo/example/fontAwesomeIcon/check');
  };
</script>
<template>
  <AppProvider>
    <view class="h2"> FontAwesomeIcon 图标组件基于font awesome icon v6.2</view>
    <view class="tip">
      Tip: 共6种风格图标, 7个字体文件,
      <!-- #ifdef MP-WEIXIN || MP-ALIPAY -->
      微信小程序和阿里小程序动态远程加载font awesome 字体,
      在\src\utils\fonts.ts中配置,
      <!-- #endif -->
      <!-- #ifndef MP-WEIXIN || MP-ALIPAY -->
      H5,APP(Android)在组件目录index.scss中配置引入字体,
      <!-- #endif -->
      已测试: 支持H5, APP(Android), 微信小程序
    </view>
    <view class="tip" style="color: #595858; margin-top: 10px">
      官网:
      <text class="link" @click="onOpen">{{ iconLink }}</text>
      <FontAwesomeIcon mode="duotone" name="copy" @click="onCopyLink" />
    </view>
    <view class="tip" style="color: #595858; margin-top: 10px">
      <view>使用方法: 在官网图标库搜索查找需要的图标,Copy Icon Name</view>
      <view class="link" @click="jumpCheck">
        图标不可用? Check! <FontAwesomeIcon name="circle-exclamation-check" />
      </view>
    </view>
    <view class="title">mode-不同风格,对应相应字体</view>
    <view> <FontAwesomeIcon name="house" />solid (默认)</view>
    <view> <FontAwesomeIcon mode="regular" name="house" />regular</view>
    <view> <FontAwesomeIcon mode="light" name="grid-2" />light grid-2</view>
    <view> <FontAwesomeIcon mode="light" name="house" />light</view>
    <view> <FontAwesomeIcon mode="thin" name="house" />thin</view>
    <view>
      <FontAwesomeIcon mode="duotone" name="trash-can-clock" />
      duotone trash-can-clock
    </view>
    <view> <FontAwesomeIcon mode="duotone" name="house" />duotone house</view>
    <view class="title">sharp-直角图标,对应sharp字体</view>
    <view> <FontAwesomeIcon name="user" sharp counter="999" /> sharp </view>

    <view class="title">mode(brands)-logo,对应brands字体</view>
    <view> <FontAwesomeIcon mode="brands" name="bilibili" /> bilibili </view>
    <view> <FontAwesomeIcon mode="brands" name="alipay" /> alipay </view>

    <view class="title">color-颜色</view>
    <view> <FontAwesomeIcon name="house" />默认 </view>
    <view> <FontAwesomeIcon name="house" color="Tomato" />Tomato </view>
    <view>
      <FontAwesomeIcon
        mode="regular"
        name="house"
        color="Dodgerblue"
      />Dodgerblue</view
    >
    <view>
      <FontAwesomeIcon
        mode="light"
        name="house"
        color="Mediumslateblue"
      />Mediumslateblue</view
    >
    <view>
      <FontAwesomeIcon mode="brands" name="bilibili" color="Dodgerblue" />
      Dodgerblue
    </view>

    <view class="title">size-大小(单位rpx)</view>
    <view> <FontAwesomeIcon mode="light" name="house" />(默认)</view>
    <view> <FontAwesomeIcon mode="light" name="house" size="24" />24rpx</view>
    <view> <FontAwesomeIcon mode="thin" name="house" size="44" />44rpx</view>
    <view> <FontAwesomeIcon mode="duotone" name="house" size="64" />64rpx</view>
    <view class="title">bgColor-背景色</view>
    <view> <FontAwesomeIcon name="house" bg-color="DodgerBlue" />solid </view>
    <view>
      <FontAwesomeIcon
        mode="regular"
        name="house"
        bg-color="SkyBlue"
      />regular</view
    >
    <view class="title">rotate-旋转角度</view>
    <view>
      <FontAwesomeIcon mode="duotone" name="house" rotate="63" />house 63</view
    >
    <view>
      <FontAwesomeIcon
        mode="duotone"
        name="snowboarding"
        rotate="58"
      />snowboarding 58</view
    >
    <view class="title">rotateFlip-旋转-翻转</view>
    <view> <FontAwesomeIcon mode="duotone" name="snowboarding" />正常</view>
    <view>
      <FontAwesomeIcon
        mode="duotone"
        name="snowboarding"
        rotate-flip="horizontal"
      />
      水平翻转
    </view>
    <view>
      <FontAwesomeIcon
        mode="duotone"
        name="snowboarding"
        rotate-flip="vertical"
      />垂直翻转
    </view>
    <view>
      <FontAwesomeIcon
        mode="duotone"
        name="snowboarding"
        rotate-flip="both"
      />垂直水平翻转
    </view>
    <view class="title">beat-缩放动画</view>
    <FontAwesomeIcon name="circle-plus" beat />
    <FontAwesomeIcon name="heart" beat />
    <view class="title">duration-动画持续时间</view>
    <FontAwesomeIcon name="heart" beat duration="1.5" />
    <view class="title">scale-缩放比例</view>
    <FontAwesomeIcon name="heart" beat duration="1.5" scale="2.0" />
    <view class="title">fade-淡入淡出动画 </view>
    <FontAwesomeIcon name="heart" fade />
    <view class="title">opacity-透明度值 </view>
    <FontAwesomeIcon name="heart" fade opacity="0.2" />
    <view class="title">beat+fade-跳动+淡入淡出动画 </view>
    <FontAwesomeIcon
      name="heart"
      beat
      fade
      opacity="0.68"
      duration="1.5"
      scale="2.0"
    />
    <view class="title">bounce-弹跳动画 </view>
    <FontAwesomeIcon name="basketball" bounce />
    <FontAwesomeIcon name="volleyball" bounce />
    <FontAwesomeIcon name="frog" bounce />
    <FontAwesomeIcon
      name="envelope"
      bounce
      :bounce-config="{
        rebound: 0,
        startScaleX: 1,
        startScaleY: 1,
        jumpScaleX: 1,
        jumpScaleY: 1,
        landScaleX: 1,
        landScaleY: 1,
      }"
    />
    <view class="title">flip-翻转动画</view>
    <FontAwesomeIcon name="compact-disc" flip />
    <FontAwesomeIcon name="camera-rotate" flip />
    <FontAwesomeIcon name="cassette-tape" flip />
    <FontAwesomeIcon
      name="scroll"
      flip
      :flip-config="{
        x: '1',
        y: '0',
      }"
    />
    <FontAwesomeIcon name="money-check-dollar" flip duration="3" />

    <view class="title">shake-抖动动画</view>
    <FontAwesomeIcon name="bell" shake />
    <FontAwesomeIcon name="stopwatch" shake />
    <FontAwesomeIcon name="bomb" shake />
    <view class="title">spin-旋转动画</view>
    <FontAwesomeIcon name="sync" spin duration="2" />
    <FontAwesomeIcon name="circle-notch" spin duration="1.5" />
    <FontAwesomeIcon name="cog" spin duration="2" />
    <FontAwesomeIcon name="cog" spin spin-reverse duration="15" />
    <FontAwesomeIcon
      name="spinner"
      spin
      spin-pulse
      spin-delay="5s"
      duration="2"
    />
    <FontAwesomeIcon
      name="spinner"
      spin
      spin-pulse
      spin-reverse
      spin-iteration-count="3"
      duration="2"
    />
    <view class="title">border-边框</view>
    <FontAwesomeIcon name="arrow-right" border />
    <FontAwesomeIcon
      name="arrow-right"
      border
      :border-config="{ color: '#000' }"
    />

    <view class="title">counter-计数</view>
    <view> <FontAwesomeIcon mode="light" name="house" counter="999" />99+</view>
    <view> <FontAwesomeIcon mode="thin" name="house" counter="65" />65</view>
    <view> <FontAwesomeIcon mode="duotone" name="house" counter="14" />14</view>
    <view class="title">float-浮动定位</view>
    <view>
      <FontAwesomeIcon name="arrow-right" float="right" />
      <FontAwesomeIcon name="arrow-left" float="left" />
    </view>
    <view class="title" style="clear: both">stack-堆叠</view>
    <FontAwesomeIcon stack>
      <template #default="slotProps">
        <FontAwesomeIcon
          name="circle"
          :stack-child="slotProps.stack"
          stack-x="2"
        />
        <FontAwesomeIcon
          name="flag"
          :stack-child="slotProps.stack"
          stack-inverse
          stack-x="1"
        />
      </template>
    </FontAwesomeIcon>
    <FontAwesomeIcon stack flip>
      <template #default="slotProps">
        <FontAwesomeIcon
          mode="brands"
          name="twitter"
          :stack-child="slotProps.stack"
          stack-inverse
          stack-z-index="2"
          stack-x="1"
        />
        <FontAwesomeIcon
          name="square"
          :stack-child="slotProps.stack"
          stack-x="2"
        />
      </template>
    </FontAwesomeIcon>

    <FontAwesomeIcon stack counter="999">
      <template #default="slotProps">
        <FontAwesomeIcon
          mode="brands"
          name="twitter"
          :stack-child="slotProps.stack"
          stack-inverse
          stack-inverse-color="#1da1f2"
          stack-z-index="2"
          stack-x="1"
        />
        <FontAwesomeIcon
          name="square"
          :stack-child="slotProps.stack"
          stack-x="2"
        />
      </template>
    </FontAwesomeIcon>

    <FontAwesomeIcon stack shake>
      <template #default="slotProps">
        <FontAwesomeIcon
          name="camera"
          :stack-child="slotProps.stack"
          stack-x="1"
        />
        <FontAwesomeIcon
          name="ban"
          :stack-child="slotProps.stack"
          stack-inverse-color="Tomato"
          stack-inverse
          stack-x="2"
        />
      </template>
    </FontAwesomeIcon>
    <FontAwesomeIcon stack rotate="45">
      <template #default="slotProps">
        <FontAwesomeIcon
          name="square"
          :stack-child="slotProps.stack"
          stack-x="2"
        />
        <FontAwesomeIcon
          name="terminal"
          rotate="-45"
          :stack-child="slotProps.stack"
          stack-inverse-color="Tomato"
          stack-inverse
          stack-x="1"
        />
      </template>
    </FontAwesomeIcon>
  </AppProvider>
</template>
<style lang="scss" scoped>
  .h2 {
    font-size: 32rpx;
    font-weight: 900;
  }
  .tip {
    font-size: 26rpx;
    font-weight: 500;
    color: #ff253a;
    .link {
      margin-right: 16rpx;
      &:hover {
        color: #315efb;
        opacity: 0.6;
        text-decoration: underline;
      }
    }
  }
  .title {
    font-size: 28rpx;
    font-weight: 600;
    margin: 28rpx 0 8rpx 0;
    color: #333333;
    font-style: oblique;
  }
</style>
