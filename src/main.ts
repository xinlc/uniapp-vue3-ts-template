import { createSSRApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/state';
import '@/static/css/main.scss';
import '@/components/FontAwesomeIcon/index.scss';
import i18n from '@/language/index';

export function createApp() {
  const app = createSSRApp(App);

  // Configure store
  setupStore(app);

  app.use(i18n);

  return {
    app,
  };
}
