/**
 * 转义字符串以在正则表达式中使用
 * @param string - 要转义的字符串
 * @returns
 */
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
