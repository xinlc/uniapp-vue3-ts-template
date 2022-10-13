// type StyleType = 'solid' | 'regular' | 'light' | 'thin' | 'duotone' | 'brands' | 'sharp';

export const FontAwesomeIconProps = {
  /** icon name
   * @link: https://fontawesome.com/icons
   */
  name: {
    type: String,
    default: 'default',
    // required: true,
  },
  /** icon 风格
   * 不同风格对应不同的css, 使用时请加载相应的css
   */
  mode: {
    type: String,
    default: 'solid',
    validator(value: string) {
      // The value must match one of these strings
      return [
        'solid',
        'regular',
        'light',
        'thin',
        'duotone',
        'brands',
      ].includes(value);
    },
  },
  /** icon sharp
   * 对应sharp css
   */
  sharp: {
    type: Boolean,
    default: false,
  },
  /**
   * icon sizing
   * @description 2xs-xs-sm-lg-xl-2xl 1-10x
   */
  frameSize: {
    type: String,
  },
  /**
   * icon size
   * @description 大小 单位 rpx
   */
  size: {
    type: [Number, String],
  },
  /**
   * icon color
   * @description 图标颜色
   */
  color: {
    type: String,
  },
  /**
   * icon color
   * @description 背景色
   */
  bgColor: {
    type: String,
  },
  /** icon rotate
   * @description 旋转角度
   */
  rotate: {
    type: [Number, String, Boolean],
    default: false,
  },
  /** icon rotateFlip
   * @description 旋转-翻转
   */
  rotateFlip: {
    type: [String, Boolean],
    default: false,
    validator(value: string) {
      // The value must match one of these strings
      return ['horizontal', 'vertical', 'both', 'inherit', false].includes(
        value,
      );
    },
  },
  /**
   * icon beat
   * @description 缩放动画
   */
  beat: {
    type: Boolean,
    default: false,
  },
  /**
   * icon duration
   * @description 动画持续时间(所有动画使用) s
   */
  duration: {
    type: [Number, String],
    default: 1,
  },
  /**
   * icon scale
   * @description 动画比例(跳动动画使用)
   */
  scale: {
    type: [Number, String],
    default: '1.25',
  },
  /**
   * icon fade
   * @description 淡入淡出动画
   */
  fade: {
    type: Boolean,
    default: false,
  },
  /**
   * icon opacity
   * @description 透明度值 (淡入淡出动画使用)
   */
  opacity: {
    type: [Number, String],
    default: '0.6',
  },
  /**
   * icon bounce
   * @description 弹跳动画
   */
  bounce: {
    type: Boolean,
    default: false,
  },
  /**
   * icon bounceConfig
   * @description 弹跳动画属性设置
   */
  bounceConfig: {
    type: Object,
    default: () => ({
      // 设置图标在跳跃后着陆时的反弹量
      rebound: '-0.125em',
      // 设置图标弹跳时跳到的最大高度
      height: '-0.5em',
      // 设置图标开始反弹时的水平挤压
      startScaleX: '1.1',
      // 设置图标开始反弹时的垂直挤压
      startScaleY: '0.9',
      // 设置图标弹跳时的水平挤压
      jumpScaleX: '0.9',
      // 设置图标弹跳时的垂直挤压
      jumpScaleY: '1.1',
      // 设置图标弹跳后着陆时的水平挤压
      landScaleX: '1.05',
      // 设置图标弹跳后着陆时的垂直挤压
      landScaleY: '0.95',
    }),
  },
  /**
   * icon flip
   * @description 翻转动画
   */
  flip: {
    type: Boolean,
    default: false,
  },
  /**
   * icon flipConfig
   * @description 翻转动画属性设置
   */
  flipConfig: {
    type: Object,
    default: () => ({
      // 设置旋转轴的 x 坐标（0~1）
      x: '0',
      // 设置旋转轴的 y 坐标（0~1)
      y: '1',
      // 设置旋转轴的 z 坐标（0~1)
      z: '0',
      // 设置翻转的旋转角度,正角表示顺时针旋转，负角表示逆时针旋转。
      angle: '-180deg',
    }),
  },
  /**
   * icon shake
   * @description 抖动动画
   */
  shake: {
    type: Boolean,
    default: false,
  },
  /**
   * icon spin
   * @description 顺时针旋转动画
   */
  spin: {
    type: [Boolean, String],
    default: false,
  },
  /**
   * icon spinReverse
   * @description 逆时针旋转动画
   */
  spinReverse: {
    type: Boolean,
    default: false,
  },
  /**
   * icon spinPulse
   * @description 以8个节拍顺时针旋转动画
   */
  spinPulse: {
    type: Boolean,
    default: false,
  },
  /**
   * icon spinDelay
   * @description 旋转动画延迟时间
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
   */
  spinDelay: {
    type: String,
    default: '0s',
  },
  /**
   * icon spinIterationCount
   * @description 旋转动画迭代次数
   */
  spinIterationCount: {
    type: [String, Number],
    default: 'infinite',
  },
  /**
   * icon spinTiming
   * @description 旋转动画在帧中的进度
   * @example linear(默认线性), ease-in,ease-out,ease-in-out,step-start,step-end, steps(4, jump-start),cubic-bezier(0.1, -0.6, 0.2, 0);
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-functionhttps://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
   */
  spinTiming: {
    type: String,
    default: 'linear',
  },
  /** icon border
   * @description 边框
   */
  border: {
    type: Boolean,
    default: false,
  },
  /**
   * icon borderConfig
   * @description 翻转动画属性设置
   */
  borderConfig: {
    type: Object,
    default: () => ({
      // 设置边框颜色
      color: '#eee',
      // 设置图标周围的填充
      padding: '.04em .26em',
      // 设置边框半径
      radius: '.1em',
      // 设置边框样式
      // 可选值 solid(默认实线), dotted(点状边框),dashed(虚线),double(双线)
      style: 'solid',
      // 设置边框宽度
      width: '.08em',
    }),
  },
  /**
   * icon float
   * @description 浮动定位
   * @example:  left ,right
   */
  float: {
    type: String,
  },
  /** icon pullMargin
   * @description 设置图标周围的边距
   */
  pullMargin: {
    type: String,
    default: '.3em',
  },
  /** icon stack
   * @description 堆叠
   */
  stack: {
    type: Boolean,
    default: false,
  },
  /** icon stackX
   * @description 堆叠层
   * @example 1 (fa-stack-1x,以基本大小显示) 2(fa-stack-2x,以较大显示)
   * */
  stackX: {
    type: [String, Number],
    default: 1,
    validator(value: number) {
      // The value must match one of these strings
      return ['1', '2'].includes(value.toString());
    },
  },
  /** icon stackInverse
   * @description 堆叠 图标反色
   */
  stackInverse: {
    type: Boolean,
    default: false,
  },
  /** icon stackChild
   * @description 堆叠子元素
   */
  stackChild: {
    type: Boolean,
    default: false,
  },
  /** icon stackZIndex
   * @description 堆叠子元素 层级
   */
  stackZIndex: {
    type: [String, Number],
    default: 'auto',
  },
  /** icon stackChild
   * @description 堆叠子元素图标反色
   */
  stackInverseColor: {
    type: String,
    default: '#fff',
  },
  /** icon counter
   * @description 角标计数
   */
  counter: {
    type: [String, Number, Boolean],
    default: false,
  },
  /** icon counterMax
   * @description 角标计数最大值
   */
  counterMax: {
    type: Number,
    default: 99,
  },
  /** icon counterMax
   * @description 角标计数背景色
   */
  counterMgColor: {
    type: String,
    default: '#ff253a',
  },
};
