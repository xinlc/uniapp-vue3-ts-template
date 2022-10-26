/**
 * 随机十六进制颜色
 * @returns #e34155
 */
export function randomHexColorCode() {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${n.slice(0, 6)}`;
}

/**
 * 随机 rgb 颜色
 * @param min - 最小值
 * @param max - 最大值
 * @returns
 */
export function randomRgbColor(min = 0, max = 255) {
  const r = randomIntegerInRange(min, max);
  const g = randomIntegerInRange(min, max);
  const b = randomIntegerInRange(min, max);
  return `rgb(${r},${g},${b})`;
}

/**
 * 随机布尔值
 * @returns true or false
 */
export function randomBoolean() {
  return Math.random() >= 0.5;
}

/**
 * 生成指定范围的随机整数
 * @param min - 最小值
 * @param max - 最大值
 * @returns (0,5) => 3
 */
export function randomIntegerInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 生成指定范围的随机小数
 * @param min - 最小值
 * @param max - 最大值
 * @returns (0,5) => 3.0211363285087005
 */
export function randomNumberInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
