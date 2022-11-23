const camelizeRE = /-(\w)/g;
/**
 * 驼峰化
 * @param str - 字符串
 * @example user-info => userInfo
 */
export const camelize = (str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
};

/**
 * 将字符串转换为 pascal
 * @param str - 字符串
 * @example
 * user-info => UserInfo
 * some_database_field_name => SomeDatabaseFieldName
 * Some label that needs to be pascalized => SomeLabelThatNeedsToBePascalized
 * some-mixed_string with spaces_underscores-and-hyphens => SomeMixedStringWithSpacesUnderscoresAndHyphens
 */
export const toPascalCase = (str: string): string => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('');
};

/**
 * 将字符串转换为 camel
 * @param str
 * @example hello-world => helloWorld
 * @example hello_world => helloWorld
 * @example hello world => helloWorld
 */
export const toCamelCase = (str: string) => {
  const s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * 将字符串转换为 kebab
 * @param str
 * @example helloWorld => hello-world
 * @example hello_world => hello-world
 * @example hello world => hello-world
 */
export const toKebabCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
    .map(x => x.toLowerCase())
    .join('-');

/**
 * 将字符串转换为 snake
 * @param str
 * @example helloWorld => hello_world
 * @example hello_world => hello_world
 * @example hello world => hello_world
 */
export const toSnakeCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
    .map(x => x.toLowerCase())
    .join('_');

/**
 * 字符数组
 * @param s
 * @example hello => ['h', 'e', 'l', 'l', 'o']
 */
export const toCharArray = (s: string) => [...s];

/**
 * 首字母大写
 * @param str - 字符串
 * @example userInfo => UserInfo
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const hyphenateRE = /\B([A-Z])/g;
/**
 * 大写字母 转为 小写-连接
 * @param str - 字符串
 * @example UserInfo => user-info
 */
export const hyphenate = (str: string) => str.replace(hyphenateRE, '-$1').toLowerCase();

/**
 * 替换所有相同字符串
 * @param text - 需要处理的字符串
 * @param repstr - 被替换的字符
 * @param newstr - 替换后的字符
 */
export function replaceAll(text: string, repstr: string, newstr: string) {
  return text.replace(new RegExp(repstr, 'gm'), newstr);
}

/**
 * @desc 去左右空格
 * @param value - 需要处理的字符串
 */
export function trim(value: string) {
  return value.replace(/(^\s*)|(\s*$)/g, '');
}

/**
 * @desc 去所有空格
 * @param value - 需要处理的字符串
 */
export function trimAll(value: string) {
  return value.replace(/\s+/g, '');
}

/**
 * 根据数字获取对应的汉字
 * @param num - 数字(0-10)
 */
export function getHanByNumber(num: number) {
  const HAN_STR = '零一二三四五六七八九十';
  return HAN_STR.charAt(num);
}

/**
 * 插入字符串
 * @param str - 原字符串
 * @param start - 插入位置
 * @param insertStr - 插入字符串
 */
export function insertStr(str: string, start: number, insertStr: string): string {
  return str.slice(0, start) + insertStr + str.slice(start);
}

/**
 * 转义HTML字符
 * @param str - 字符串
 * @example '<a href="#">Me & you</a>' => '&lt;a href="#"&gt;Me &amp; you&lt;/a&gt;'
 */
export function escapeHTML(str: string) {
  return str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[tag] || tag),
  );
}

/**
 * 移除空格
 * @param str - 字符串
 * @example '  Hello  \nWorld  ' => 'Hello World'
 */
export const removeWhitespace = (str: string) => str.replace(/\s+/g, '');

/**
 * 消息格式化
 * @param {string}  message  字符串模板,如'format {0}',
 * @param {any[]}  arr  模板数据,如['data'],
 * @returns {string} 消息格式化后的字符串
 *
 * @example
 *  format('format {0}', ['123']); // 'format 123'
 *  format('format {0} {1}', ['123']); // 'format 123 undefined'
 */
export function format(message: string, arr: any[]): string {
  return message.replace(/{(\d+)}/g, (matchStr, group1) => {
    return arr[group1];
  });
}
