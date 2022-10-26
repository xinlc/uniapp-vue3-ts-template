/**
 * 移除数组中的某个元素
 * @param arr - 数组
 * @param el - 元素
 */
export const removeAt = <T>(arr: T[], el: T) => {
  const i = arr.indexOf(el);
  if (i > -1) arr.splice(i, 1);
};

/**
 * 将值插入到指定索引之后
 * @param arr - 数组
 * @param index - 索引
 * @param v - 值
 * @example
 * let otherArray = [2, 10];
 * insertAt(otherArray, 0, 4, 6, 8); // otherArray = [2, 4, 6, 8, 10]
 */
export const insertAt = <T>(arr: T[], index: number, ...v: T[]) => {
  arr.splice(index + 1, 0, ...v);
  return arr;
};

/**
 * 返回数组中的最后一个元素
 * @param arr - 数组
 * @example
 * last([1, 2, 3]); // 3
 * last([]); // undefined
 * last(null); // undefined
 * last(undefined); // undefined
 */
export const last = <T>(arr: T[]) => (arr && arr.length ? arr[arr.length - 1] : undefined);

/**
 * 返回数组中的最后 n 个元素
 * @param arr - 数组
 * @param n - 索引
 * @example lastN(['a', 'b', 'c', 'd'], 2); // ['c', 'd']
 */
export const lastN = <T>(arr: T[], n: number) => arr.slice(-n);

/**
 * 布尔全等判断
 * @param arr - 数组
 * @param fn - 判断函数
 * @example all([4, 2, 3], x => x > 1) => true
 */
export function all(arr: unknown[], fn = Boolean) {
  return arr.every(fn);
}

/**
 * 检查数组各项相等
 * @param arr - 数组
 * @example allEqual([4, 2, 3]) => false
 * @example allEqual([4, 4, 4]) => true
 */
export function allEqual(arr: unknown[]) {
  return arr.every(val => val === arr[0]);
}
