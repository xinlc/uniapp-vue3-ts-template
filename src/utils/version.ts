/**
 * 对比 version 的版本号
 * @param v1 - 版本号1
 * @param v2 - 版本号2
 * @returns -1: v1 < v2; 0: v1 = v2; 1: v1 > v2
 */
export function compareVersion(v1: string, v2: string): number {
  const v1Arr = v1.split('.');
  const v2Arr = v2.split('.');
  const len = Math.max(v1Arr.length, v2Arr.length);

  while (v1Arr.length < len) v1Arr.push('0');

  while (v2Arr.length < len) v2Arr.push('0');

  for (let i = 0; i < len; i++) {
    const num1 = +v1Arr[i];
    const num2 = +v2Arr[i];

    if (num1 > num2) return 1;
    else if (num1 < num2) return -1;
  }

  return 0;
}
