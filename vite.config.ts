/*
 * https://vitejs.cn/config/
 */
import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import eslintPlugin from 'vite-plugin-eslint';
import { viteMockServe } from 'vite-plugin-mock';
// import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';

// 使用 UnoCSS 代替 WindiCSS
// import WindiCSS from 'vite-plugin-windicss';
// import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup';

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '@': pathResolve('./src/'),
};

const viteConfig = defineConfig((mode: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode.mode, root);

  const localEnabled: boolean = (env.VITE_USE_MOCK as unknown as boolean) || false;
  const prodEnabled: boolean = (env.VITE_USE_CHUNK_MOCK as unknown as boolean) || false;

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
      open: env.VITE_OPEN === 'true',
      proxy: {
        [env.VITE_BASE]: {
          target: env.VITE_BASE_URL,
          ws: true,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(env.VITE_BASE, 'g'), '/'),
        },
      },
    },
    // build: {
    //   outDir: 'dist',
    //   sourcemap: false,
    //   chunkSizeWarningLimit: 1500,
    //   rollupOptions: {
    //     output: {
    //       entryFileNames: `assets/[name].${new Date().getTime()}.js`,
    //       chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
    //       assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
    //       compact: true,
    //       manualChunks: {
    //         vue: ['vue', 'vue-router', 'vuex'],
    //         echarts: ['echarts'],
    //       },
    //     },
    //   },
    //   terserOptions: {
    //     compress: {
    //       drop_console: true,
    //       drop_debugger: true,
    //     },
    //     ie8: true,
    //     output: {
    //       comments: true,
    //     },
    //   },
    // },
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

      // https://github.com/unocss/unocss
      // see unocss.config.ts for config
      UnoCSS(),

      // 建议用 easycom
      // https://github.com/antfu/unplugin-vue-components
      // Components({
      //   dirs: ['src/components'],
      //   extensions: ['vue', 'ts', 'tsx'],
      //   dts: 'src/types/components.d.ts',
      //   deep: true,
      // }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'pinia', 'uni-app'],
        dts: 'src/types/auto-imports.d.ts',
        dirs: ['src/hooks', 'src/stores/modules'],
        vueTemplate: true,
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
          // additionalData: '@import "@/assets/style/main.scss";',
          additionalData: `$image-path: '${env.VITE_IMAGE_URL}';`,
        },
      },
    },
  };
});

export default viteConfig;
