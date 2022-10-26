import { isObject } from '@/utils/is';

export * from './array';
export * from './object';
export * from './promise';
export * from './string';
export * from './version';
export * from './date';
export * from './regExp';
export * from './number';
export * from './is';
export * from './misc';
export * from './img';
export * from './color';
export * from './random';

/**
 * 深度合并
 * @param src
 * @param target
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}
