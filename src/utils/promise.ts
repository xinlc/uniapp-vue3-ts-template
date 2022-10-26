import type { Fn } from './types';

/**
 * 睡眠
 * @param ms - 毫秒数
 * @param callback - 回调函数
 */
export function sleep(ms: number, callback?: Fn<any>): Promise<void> {
  return new Promise<void>(resolve =>
    setTimeout(async () => {
      callback && (await callback());
      resolve();
    }, ms),
  );
}
