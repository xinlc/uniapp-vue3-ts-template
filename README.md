uni-app Vue3 Vite3 Pinia TypeScript 基础框架
===

## 特性

- **最新技术栈**：使用 Vue3/Vite3/Pinia/TypeScript/Windicss/Unocss 等前端前沿技术开发;
- **Eslint/Prettier**：规范代码格式，统一编码;
- **路由拦截**：基于 uni.addInterceptor 进行路由拦截;
- **请求拦截**：核心使用 [luch-request](https://github.com/lei-mu/luch-request)，支持请求和响应拦截等;
- **缓存加密**：使用AES加密缓存，可设置区分在开发或生成环境中是否加密;
- **自动导入**：自动导入 vue3 的 hooks 等。

## 目录结构

```shell
├── mock              # mockjs
├── src
│  ├── api            # 接口相关
│  │  ├── models      # 数据模型
│  │  ├── auth.ts
│  │  └── ...
│  ├── assets         # 静态资源目录，css、less/scss 等资源不要放在 static 目录下
│  ├── components     # 组件目录
│  │  ├── AppProvider
│  │  └── ...
│  ├── config         # 配置相关
│  │  ├── app.ts
│  │  └── encryptionConfig.ts
│  ├── enums          # 枚举/常量
│  │  ├── appEnum.ts
│  │  └── ...
│  ├── language        # i18n
│  │  ├── lang
│  │  └── index.ts
│  ├── pages           # 页面
│  │  ├── about
│  │  └── ...
│  ├── pagesA          # 子页面(拆包)
│  │  └── list
│  ├── stores           # state 状态管理模式(pinia)
│  │  ├── modules
│  │  └── index.ts
│  ├── static          # 静态文件静态公共文件
│  │  ├── images
│  │  └── ...
│  ├── types           # 类型文件
│  ├── uni_modules     # uni 组件库
│  ├── utils           # 工具类
│  │  ├── cache        # 缓存相关目录
│  │  ├── http         # request相关目录
│  │  ├── interceptors # 拦截器相关目录
│  │  └── ...
│  ├── wxcomponents    # 微信小程序组件
│  ├── App.vue
│  ├── env.d.ts
│  ├── main.ts
│  ├── manifest.json
│  ├── pages.json
│  └── uni.scss
├── .editorconfig
├── .env
├── .env.development
├── .env.production
├── .env.staging
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc.js
├── LICENSE
├── README.md
├── favicon.ico
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts

```

## 安装使用

- 安装依赖

```bash
# nodejs v18.12.x
npx degit xinlc/uniapp-vue3-ts-template my-project

cd my-project

pnpm install
```

- 运行

```bash
# 其他端请查看 package.json script

# h5 or npm run xxx
pnpm dev:h5

# 微信小程序, 生成的包在 dist/dev/mp-weixin 下，用微信开发者工具打开
pnpm dev:mp-weixin
```

- 打包

```bash
# 其他端请查看 package.json script
pnpm build:h5
```

## 开发工具

### VsCode 插件

- volar
- ESLint
- prettier
- UnoCSS

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
  
## 参考资料

- [uni-app Vue3 Vite3 TypeScript 基础框架](https://gitee.com/h_mo/uniapp-vue3-vite3-ts-template) - 基于该项目进行修改
- [uni-app](https://github.com/dcloudio/uni-app) - 跨平台框架
- [Vue3](https://github.com/vuejs/) - Vue3
- [Vite](https://github.com/vitejs/vite) - 构建工具
- [Pinia](https://github.com/vuejs/pinia) - 状态管理（代替 Vuex)
- [TypeScript](https://github.com/microsoft/TypeScript) - TS
- [luch-request](https://github.com/lei-mu/luch-request) - API 请求库
- [Windi CSS](https://github.com/windicss/windicss) - ACSS 框架
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动导入
- [UnoCSS](https://github.com/unocss/unocss) - 原子 CSS 引擎。
