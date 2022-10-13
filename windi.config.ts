import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  extend: {
    lineClamp: {
      sm: '3',
      lg: '10',
    },
  },
  preflight: false,
  prefixer: false,
  extract: {
    // 忽略部分文件夹
    exclude: ['node_modules', '.git', 'dist'],
  },
  content: [
    './src/**/*.vue',
    './src/**/*.{vue,js}',
    './src/pages/**/*.{vue,js}',
    './index.html',
  ],
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    container: false,
  },
  // plugins: [require('windicss/plugin/line-clamp')],
});
