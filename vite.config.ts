/*
 * https://vitejs.cn/config/
 */
import { ConfigEnv, defineConfig, UserConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import eslintPlugin from 'vite-plugin-eslint';
import { viteMockServe } from 'vite-plugin-mock';
import WindiCSS from 'vite-plugin-windicss';
import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup';

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '@': pathResolve('./src/'),
};

const viteConfig = defineConfig((mode: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode.mode, root);

  const localEnabled: boolean =
    (env.VITE_USE_MOCK as unknown as boolean) || false;

  const prodEnabled: boolean =
    (env.VITE_USE_CHUNK_MOCK as unknown as boolean) || false;

  return {
    base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
    root: root,
    resolve: { alias },
    define: {
      'process.env': {},
    },

    server: {
      host: true,
      // host: '0.0.0.0',
      port: env.VITE_PORT as unknown as number,
      open: env.VITE_OPEN,
      proxy: {
        [env.VITE_BASE]: {
          target: env.VITE_BASE_URL,
          ws: true,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(env.VITE_BASE, 'g'), '/'),
        },
      },
    },
    plugins: [
      uni(),
      viteMockServe({
        // 解析根目录下的mock文件夹
        mockPath: 'mock',
        localEnabled: localEnabled, // 开发打包开关
        prodEnabled: prodEnabled, // 生产打包开关
        supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        watchFiles: true, // 监视文件更改
      }),
      // WindiCSS({
      //   scan: {
      //     dirs: ['.'], // 当前目录下所有文件
      //     fileExtensions: ['vue', 'js', 'ts'], // 同时启用扫描vue/js/ts
      //   },
      // }),
      // MiniProgramTailwind(),
      // eslintPlugin({
      //   include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
      //   exclude: ['./node_modules/**'],
      //   cache: false,
      // }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/static/css/main.scss";',
        },
      },
    },
  };
});

export default viteConfig;
