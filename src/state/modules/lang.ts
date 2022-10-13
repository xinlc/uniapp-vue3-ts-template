import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { getCache, setCache } from '@/utils/cache';

export const useLangStore = defineStore({
  id: 'lang',
  state: () => {
    return {
      lang: '',
    };
  },
  getters: {
    getLang: state => {
      return state.lang;
    },
  },
  actions: {
    initLang() {
      this.lang = getCache('lang') || 'cn';
      const { locale } = useI18n();
      locale.value = this.lang;
    },
    switchLang(lang: string) {
      this.lang = lang;
      const { locale } = useI18n();
      locale.value = lang;
      setCache('lang', lang);
    },
  },
});
