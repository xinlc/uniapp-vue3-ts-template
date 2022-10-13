import { getBaseUrl } from '@/utils/env';

const fa_style_family = 'Font Awesome 6';

const fa_style_family_solid = `${fa_style_family} Solid`;
const fa_style_family_regular = `${fa_style_family} Regular`;
const fa_style_family_light = `${fa_style_family} Light`;
const fa_style_family_thin = `${fa_style_family} Thin`;
const fa_style_family_sharp_solid = `${fa_style_family} Sharp Solid`;
const fa_style_family_brands = `${fa_style_family} Brands Regular`;
const fa_style_family_duotone = `${fa_style_family} Duotone Solid`;

const BASE_URL = getBaseUrl();

const fontFamilyList = [
  {
    family: fa_style_family_solid,
    source: `/fa-solid-900.woff2`,
    weight: '900',
  },
  {
    family: fa_style_family_regular,
    source: `/fa-regular-400.woff2`,
    weight: '400',
  },
  {
    family: fa_style_family_light,
    source: `/fa-light-300.woff2`,
    weight: '300',
  },
  {
    family: fa_style_family_thin,
    source: `/fa-thin-100.woff2`,
    weight: '100',
  },
  {
    family: fa_style_family_sharp_solid,
    source: `/fa-sharp-solid-900.woff2`,
    weight: '900',
  },
  {
    family: fa_style_family_duotone,
    source: `/fa-duotone-900.woff2`,
    weight: '900',
  },
  {
    family: fa_style_family_brands,
    source: `/fa-brands-400.woff2`,
    weight: '400',
  },
];

function LoadFontFace(
  data: UniApp.LoadFontFaceOptions & { weight?: string; global?: boolean },
) {
  return new Promise((resolve, reject) => {
    uni.loadFontFace({
      global: true,
      ...data,
      desc: {
        style: 'normal',
        weight: data.weight ?? 'normal',
        variant: 'normal',
      },
      success: res => {
        resolve(res);
      },
      fail: err => {
        reject(err);
      },
    });
  });
}

/**
 * 动态加载字体
 */
export function dynamicLoadFontFace() {
  /* 实际项目中替换为自己服务器的静态资源地址
   * 微信小程序端字体链接必须是同源下的，或开启了cors支持，微信小程序的域名是servicewechat.com
   * */
  const DYNAMIC_LOAD_FONT_FACE_URL = `${BASE_URL}/fonts`;
  fontFamilyList.forEach(fontFamily => {
    LoadFontFace({
      ...fontFamily,
      source: `url(${DYNAMIC_LOAD_FONT_FACE_URL}${fontFamily.source})`,
    })
      .then((res: any) => {
        console.log(fontFamily.family, res.errMsg);
      })
      .catch(err => {
        console.error(fontFamily.family, err.errMsg);
      });
  });
}

/**
 * APP本地加载字体
 */
export function loadFontFaceFromLocal() {
  fontFamilyList.forEach(fontFamily => {
    const source = `url(${plus.io.convertLocalFileSystemURL(
      `_www/static/fonts${fontFamily.source}`,
    )})`;
    LoadFontFace({
      ...fontFamily,
      source,
    })
      .then((res: any) => {
        console.log(fontFamily.family, res.errMsg);
      })
      .catch(err => {
        console.error(fontFamily.family, err);
      });
  });
}
