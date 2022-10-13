<script lang="ts" setup>
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import FontAwesomeIcon from '@/components/FontAwesomeIcon/index.vue';
  import { computed, reactive, ref, watch } from 'vue';
  import { random } from 'lodash-es';
  import {
    brandIcons,
    classicIcons,
  } from '@/demo/example/fontAwesomeIcon/icons';
  import { SetClipboardData } from '@/utils/uniapi';
  const attribute = reactive({
    mode: 'solid',
    sharp: false,
    color: '#000000',
    size: '64',
    rotate: '',
    rotateFlip: false,
    beat: false,
    fade: false,
    bounce: false,
    flip: false,
    shake: false,
    spin: false,
  });
  const exampleIcons = computed<string[]>(() => {
    return attribute.mode == 'brands' ? brandIcons : classicIcons;
  });
  const randomIndex = ref<number>(random(0, exampleIcons.value.length + 1));
  const iconName = ref<string>(exampleIcons.value[randomIndex.value]);
  const isFocus = ref(false);

  watch(randomIndex, (newValue, oldValue) => {
    iconName.value = exampleIcons.value[newValue];
  });

  const modeList = ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'];
  const colors = [
    {
      color: '#000000',
      name: '黑色',
    },
    {
      color: '#FFFFFF',
      name: '白色',
    },
    {
      color: '#0000FF',
      name: '蓝色',
    },
    {
      color: '#008080',
      name: '蓝绿色',
    },
    {
      color: '#FF0000',
      name: '红色',
    },
    {
      color: '#00FF00',
      name: '绿色',
    },
    {
      color: '#FFFF00',
      name: '黄色',
    },
  ];
  const rotateFlips = [
    {
      value: false,
      name: '正常',
    },
    {
      value: 'horizontal',
      name: '水平翻转',
    },
    {
      value: 'vertical',
      name: '垂直翻转',
    },
    {
      value: 'both',
      name: '垂直水平翻转',
    },
  ];
  const animations = [
    {
      value: 'beat',
      name: '缩放',
    },
    {
      value: 'fade',
      name: '淡入淡出',
    },
    {
      value: 'bounce',
      name: '弹跳',
    },
    {
      value: 'flip',
      name: '翻转',
    },
    {
      value: 'shake',
      name: '抖动',
    },
    {
      value: 'spin',
      name: '旋转',
    },
  ];

  watch(
    () => attribute.mode,
    (newValue, oldValue) => {
      const newValueIndex = modeList.findIndex(item => item == newValue);
      const oldValueIndex = modeList.findIndex(item => item == oldValue);
      if (
        (newValueIndex == 5 && oldValueIndex < 5) ||
        (oldValueIndex == 5 && newValueIndex < 5)
      ) {
        onRandom();
      }
    },
  );

  const setAttribute = (e: any) => {
    const { k: key, v: value } = e.currentTarget.dataset;
    const replaces = ['mode', 'color', 'size', 'rotate', 'rotateFlip'];
    if (key in attribute) {
      if (replaces.includes(key)) {
        // @ts-ignore
        attribute[key] = value;
        if (key == 'mode') {
          attribute.sharp = false;
        }
        if (key == 'rotate') attribute.rotateFlip = false;
        if (key == 'rotateFlip') attribute.rotate = '';
        return;
      }
      // @ts-ignore
      attribute[key] = !attribute[key];
      if (key == 'sharp' && attribute.sharp) {
        attribute.mode = 'solid';
      }
    }
  };

  const onNumberChange = (e: any) => {
    const { k: key, type } = e.currentTarget.dataset;
    if (key in attribute) {
      // @ts-ignore
      let num = attribute[key] ? parseInt(attribute[key]) : 0;
      switch (type) {
        case 'minus':
          num -= 1;
          break;
        case 'plus':
          num += 1;
          break;
      }
      // @ts-ignore
      attribute[key] = num <= 0 || num > 360 ? '' : num.toString();
    }
  };
  const onRandom = () => {
    randomIndex.value = random(0, exampleIcons.value.length + 1);
  };
  const onFocus = () => {
    isFocus.value = true;
  };
  const onBlur = () => {
    isFocus.value = false;
  };
  const copyIconName = () => {
    SetClipboardData(iconName.value);
  };
</script>
<template>
  <AppProvider>
    <view class="check-icon-wrap">
      <FontAwesomeIcon
        :name="iconName"
        :mode="attribute.mode"
        :sharp="attribute.sharp"
        :color="attribute.color"
        :size="attribute.size"
        :rotate="attribute.rotate"
        :rotate-flip="attribute.rotateFlip"
        :beat="attribute.beat"
        :fade="attribute.fade"
        :bounce="attribute.bounce"
        :flip="attribute.flip"
        :shake="attribute.shake"
        :spin="attribute.spin"
      />
    </view>
    <view class="check-wrap" :class="{ focus: isFocus }">
      <view class="input-wrap">
        <input
          placeholder="Icon Name"
          type="text"
          @focus="onFocus"
          @blur="onBlur"
          v-model.trim.lazy="iconName"
        />
      </view>
      <view class="icon-wrap">
        <FontAwesomeIcon
          @click="onRandom"
          name="shuffle"
          mode="duotone"
          color="#2F72EFFF"
        />
      </view>
    </view>
    <view class="attribute-wrap">
      <view class="attribute-list">
        <view class="attribute-item copy" @click="copyIconName">
          <FontAwesomeIcon name="copy" mode="duotone" />
          <text>Copy Icon Name</text>
        </view>
      </view>
      <view class="mode">
        <view class="label">风格(mode): </view>
        <view class="attribute-list">
          <template v-for="(mode, index) in modeList" :key="index">
            <view
              class="attribute-item"
              @click="setAttribute"
              data-k="mode"
              :data-v="mode"
            >
              <FontAwesomeIcon
                mode="regular"
                :name="attribute.mode == mode ? 'circle-dot' : 'circle'"
              /><text>{{ mode }}</text>
            </view>
          </template>
          <view
            class="attribute-item"
            style="width: 50%"
            @click="setAttribute"
            data-k="sharp"
          >
            <FontAwesomeIcon
              :mode="attribute.sharp ? 'solid' : 'regular'"
              :name="attribute.sharp ? 'square-check' : 'square'"
            /><text>直角(sharp)</text>
          </view>
        </view>
      </view>
      <view class="color">
        <view class="label">颜色(color): </view>
        <view class="attribute-list">
          <template v-for="(item, index) in colors" :key="index">
            <view
              class="attribute-item"
              @click="setAttribute"
              data-k="color"
              :data-v="item.color"
            >
              <FontAwesomeIcon
                mode="regular"
                :name="attribute.color == item.color ? 'circle-dot' : 'circle'"
              /><text>{{ item.name }}</text>
            </view>
          </template>
        </view>
      </view>
      <view class="size flex-row">
        <view class="label">大小(size)[rpx]:</view>
        <view class="flex-row input-wrap">
          <view
            class="icon-warp minus"
            @click="onNumberChange"
            data-k="size"
            data-type="minus"
          >
            <FontAwesomeIcon name="minus" bg-color="#C3C6D1" />
          </view>
          <input
            class="attribute-input"
            type="number"
            v-model.trim.lazy="attribute.size"
          />
          <view
            class="icon-warp plus"
            @click="onNumberChange"
            data-k="size"
            data-type="plus"
          >
            <FontAwesomeIcon name="plus" bg-color="#C3C6D1" />
          </view>
        </view>
      </view>
      <view class="rotate flex-row">
        <view class="label">旋转角度(rotate)[deg]: </view>
        <view class="flex-row input-wrap">
          <view
            class="icon-warp minus"
            @click="onNumberChange"
            data-k="rotate"
            data-type="minus"
          >
            <FontAwesomeIcon name="minus" bg-color="#C3C6D1" />
          </view>
          <input
            class="attribute-input"
            type="number"
            v-model.trim.lazy="attribute.rotate"
          />
          <view
            class="icon-warp plus"
            @click="onNumberChange"
            data-k="rotate"
            data-type="plus"
          >
            <FontAwesomeIcon name="plus" bg-color="#C3C6D1" />
          </view>
        </view>
      </view>
      <view class="color">
        <view class="label">翻转(rotateFlip): </view>
        <view class="attribute-list">
          <template v-for="(item, index) in rotateFlips" :key="index">
            <view
              class="attribute-item"
              style="width: 50%"
              @click="setAttribute"
              data-k="rotateFlip"
              :data-v="item.value"
            >
              <FontAwesomeIcon
                mode="regular"
                :name="
                  attribute.rotateFlip == item.value ? 'circle-dot' : 'circle'
                "
              /><text>{{ item.name }}</text>
            </view>
          </template>
        </view>
      </view>
      <view class="animation">
        <view class="label">动画: </view>
        <view class="attribute-list">
          <template v-for="(item, index) in animations" :key="index">
            <view
              class="attribute-item"
              style="width: 50%"
              @click="setAttribute"
              :data-k="item.value"
            >
              <FontAwesomeIcon
                :mode="attribute[item.value] ? 'solid' : 'regular'"
                :name="attribute[item.value] ? 'square-check' : 'square'"
              /><text>{{ item.name }}</text>
            </view>
          </template>
        </view>
      </view>
    </view>
  </AppProvider>
</template>
<style lang="scss" scoped>
  .title {
    margin: 20rpx 0 36rpx 0;
    text-align: center;
    font-size: 32rpx;
    font-weight: 600;
  }
  .check-icon-wrap {
    height: 160rpx;
    max-height: 200rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
  }
  .check-wrap {
    background-color: #ffffff;
    height: 88rpx;
    border-radius: 88rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36rpx;
    box-shadow: 0rpx 0rpx 36rpx #a3adba;
    &.focus {
      //border: 1rpx solid #a3adba;
    }
    .input-wrap {
      flex-grow: 1;
      input {
        height: 64rpx;
        //outline: 1rpx solid #a3adba;
      }
    }
    .icon-wrap {
      width: 64rpx;
      text-align: right;
      font-size: 40rpx;
      &:hover {
        color: #ff8787;
      }
    }
  }
  .attribute-wrap {
    font-size: 26rpx;
    & > view {
      margin-top: 16rpx;
      align-items: center;
    }
    .label {
      font-style: oblique;
    }
    margin-top: 24rpx;
    .attribute-list {
      display: flex;
      flex-wrap: wrap;
      .attribute-item {
        width: 30%;
        height: 56rpx;
        padding-left: 32rpx;
        display: flex;
        align-items: center;
        text {
          margin-left: 10rpx;
        }
        &.copy {
          width: 50%;
          color: #2f72efff;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .attribute-input {
      width: 96rpx;
    }
    .input-wrap {
      border: 1rpx solid #c3c6d1;
      border-radius: 16rpx;
      //padding: 0 12rpx;
      margin-left: 16rpx;
      align-items: center;
      justify-content: space-between;
      .icon-warp {
        background-color: #c3c6d1;
        height: 52rpx;
        line-height: 52rpx;
        padding: 0 16rpx;
        &.plus {
          border-top-right-radius: 16rpx;
          border-bottom-right-radius: 16rpx;
        }
        &.minus {
          border-top-left-radius: 16rpx;
          border-bottom-left-radius: 16rpx;
        }
      }
      .attribute-input {
        text-align: center;
        flex-grow: 1;
        height: 52rpx;
        margin: 0 16rpx;
      }
    }
  }
</style>
