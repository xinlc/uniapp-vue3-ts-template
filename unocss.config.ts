import type { RuleContext } from 'unocss';
import type { Theme } from 'unocss/preset-uno';
import { defineConfig, presetAttributify, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetApplet, presetRemToRpx, transformerApplet, transformerAttributify } from 'unocss-applet';
import { parseColor } from '@unocss/preset-mini/utils';
import { promises as fs } from 'fs';
import { importDirectory, parseColors, runSVGO, deOptimisePaths } from '@iconify/tools';
import { compareColors, stringToColor } from '@iconify/utils/lib/colors';

// const isH5 = process.env.UNI_PLATFORM === 'h5';
const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp');

const colors = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
];

// 定义主题
const theme: Theme = {
  colors: {
    context: 'rgb(var(--uu-c-context))',
    primary: '#0062ff',
    success: '#3AC569',
    info: '#0080FF',
    warning: '#F17F42',
    danger: '#fc5a5a',
    lightBg: '#F3F4F6',
    darkBg: '#373739',
    placeholder: '#DCDCDC',
    grayBg: '#484849',
    darkBd: '#4C4D4F',
    softBg: '#E5E6EB',
    darkTitle: '#ECECEC',
    darkText: '#7C7C7D',
    darkSubText: 'rgba(255,255,255,.7)',
    navBg: '#eff0f5',
    primaryText: '#333333',
    regularText: '#666666',
    secondaryText: '#999999',
    hoverView: '#f5f5f5',
  },
};

// 基本快捷方式
const baseShortcuts: Record<string, string> = {
  'u-bg-base': 'bg-gray-100 dark:bg-dark',
  'u-bg-base-second': 'bg-white dark:bg-dark-100',
  'u-bg-primary': 'bg-light-blue-500 dark:bg-light-blue-600/80',
  'u-color-base': 'text-gray-700 dark:text-light-2',
  'u-color-base-second': 'text-gray-400 dark:text-gray-500/60',
  'u-border-base': 'border-gray-400/50',
  'u-border-300': 'border-gray-400/40',
  'u-border-200': 'border-gray-400/25',
  'u-transition': 'transition-all duration-200',
  'u-solid': 'bg-context border-context text-white',
  'u-outline': 'bg-context border-context !bg-op0 text-context',
  'u-ghost': 'u-outline border-dashed',
  'u-light': 'bg-context border-context !bg-op20 !border-op0 text-context',
  'u-text': 'border-context bg-transparent !border-op0 text-context',
  'u-disabled': 'op70',
};

const shortcuts = [baseShortcuts];

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        // Loading IconifyJSON data
        test: async () => {
          const content = await fs.readFile('assets/test.json', 'utf8');
          return JSON.parse(content);
        },

        // Loading icon set
        'custom-svg': async () => {
          // Load icons
          const iconSet = await importDirectory('assets/svg', {
            prefix: 'svg',
          });

          // Clean up each icon
          await iconSet.forEach(async name => {
            const svg = iconSet.toSVG(name)!;

            // Change color to `currentColor`
            const blackColor = stringToColor('black')!;

            await parseColors(svg, {
              defaultColor: 'currentColor',
              callback: (attr, colorStr, color) => {
                // console.log('Color:', colorStr, color);

                // Change black to 'currentColor'
                if (color && compareColors(color, blackColor)) {
                  return 'currentColor';
                }

                switch (color?.type) {
                  case 'none':
                  case 'current':
                    return color;
                }

                throw new Error(`Unexpected color "${colorStr}" in attribute ${attr}`);
              },
            });

            // Optimise
            runSVGO(svg);

            // Update paths for compatibility with old software
            await deOptimisePaths(svg);

            // Update icon in icon set
            iconSet.fromSVG(name, svg);
          });

          // Export as IconifyJSON
          return iconSet.export();
        },
      },
    }),
    /**
     * you can add `presetAttributify()` here to enable unocss attributify mode prompt
     * although preset is not working for applet, but will generate useless css
     */
    presetApplet({ enable: isApplet }),
    presetAttributify(),
    presetRemToRpx({ enable: isApplet }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify({ enable: isApplet }),
    transformerApplet({ enable: isApplet }),
  ],
  theme,
  shortcuts,
  rules: [
    [
      /^u-(.*)$/,
      ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme);
        if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
          return {
            '--uu-c-context': `${color.cssColor.components.join(',')}`,
          };
        }
      },
    ],
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    ['pl-safe', { 'padding-left': 'env(safe-area-inset-left)' }],
    ['pr-safe', { 'padding-right': 'env(safe-area-inset-right)' }],
    [
      'm-safe',
      {
        margin:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['mt-safe', { 'margin-top': 'env(safe-area-inset-top)' }],
    ['mb-safe', { 'margin-bottom': 'env(safe-area-inset-bottom)' }],
    ['ml-safe', { 'margin-left': 'env(safe-area-inset-left)' }],
    ['mr-safe', { 'margin-right': 'env(safe-area-inset-right)' }],
    ['inline-icon', { 'vertical-align': '-0.125em' }],
    ['icon16', { 'font-size': '16px', 'line-height': '1em' }],
    ['icon24', { 'font-size': '24px', 'line-height': '1em' }],
  ],
  safelist: [
    ...colors.map(c => `bg-${c}`),
    ...colors.map(c => `bg-${c}-3`),
    ...colors.map(c => `text-${c}-5`),

    // colors
    ...Object.keys(theme.colors!).map(c => `u-${c}`),
    // shortcuts
    ...shortcuts.map(s => Object.keys(s)).flat(),
  ],
});
