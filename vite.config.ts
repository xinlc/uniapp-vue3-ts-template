// import { defineConfig } from "vite";
// import uni from "@dcloudio/vite-plugin-uni";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [uni()],
// });

import { ConfigEnv, UserConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';
import { loadEnv } from 'vite';

// https://vitejs.cn/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    base: './',
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
    define: {
      'process.env': {},
    },
    server: {
      host: true,
      // open: true,
      port: env.VITE_PORT as any,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
        '/upload': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/upload/, ''),
        },
      },
    },
    plugins: [
      uni(),
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
        },
      },
    },
  };
};
