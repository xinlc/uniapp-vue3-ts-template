/**
 * 转为数字
 * @param val - 值
 * @returns
 */
export const toNumber = (val: any): any => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

/**
 * 保留小数点后面n位数字,四舍五入
 * @param {string} value
 * @param {number} n
 * @returns {string}
 */
export const toFix = (value: string, n: number): string => {
  n = n || 2;
  return parseFloat(value).toFixed(n);
};
