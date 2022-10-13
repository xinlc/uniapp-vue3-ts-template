module.exports = {
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  semi: true,     // 行尾是否使用分号，默认为true
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
  trailingComma: 'all', // 是否使用尾逗号
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
  arrowParens: 'avoid',
};
