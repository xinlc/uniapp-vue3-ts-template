const { toString } = Object.prototype;

import { toTypeString } from './object';

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

export function isNull(val: unknown): val is null {
  return val === null;
}
export const isUndefined = (val: unknown): val is undefined => toTypeString(val) === '[object Undefined]';

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol';

export function isString(val: unknown): val is string {
  return is(val, 'String');
}
// export const isString = (val: unknown): val is string => typeof val === 'string'

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}
export const isFile = (val: unknown): val is File => toTypeString(val) === '[object File]';

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

// export const isMap = (val: unknown): val is Map<any, any> => toTypeString(val) === '[object Map]';

export const isSet = (val: unknown): val is Set<any> => toTypeString(val) === '[object Set]';

export const isServer = typeof window === 'undefined';

export const isClient = !isServer;

export function isUrl(path: string): boolean {
  // @ts-ignore
  const reg =
    /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/;
  return reg.test(path);
}

/**
 * 是否为纯粹的对象
 * isObject([]) 是 true ，因为 type [] 为 'object'
 * isPlainObject([]) 则是false
 */
export const isPlainObject = (val: unknown): val is object => toTypeString(val) === '[object Object]';
/**
 * 是否为空字符串
 */
export function isEmptyString(v: unknown) {
  return isString(v) && v.trim().length === 0;
}

// /**
//  * 是否为空
//  * @example isEmpty(null) // true
//  * @example isEmpty(undefined) // true
//  * @example isEmpty('') // true
//  * @example isEmpty([]) // true
//  * @example isEmpty({}) // true
//  * @example isEmpty(' ') // false
//  * @example isEmpty(123) // true
//  */
// export function isEmpty(val: any) {
//   return val == null || !(Object.keys(val) || val).length;
// }
