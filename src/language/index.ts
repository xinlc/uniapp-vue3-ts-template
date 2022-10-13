import { createI18n } from 'vue-i18n'; //引入vue-i18n组件
import cn from '@/language/lang/lang.cn';
import en from '@/language/lang/lang.en';
import { getCache } from '@/utils/cache';

const locale = getCache('language') || 'cn';
const messages = {
  cn: cn,
  en: en,
};
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: locale,
  messages: messages,
});

export default i18n;
