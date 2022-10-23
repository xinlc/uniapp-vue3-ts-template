import { createSSRApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/stores';
import '@/components/FontAwesomeIcon/index.scss';
import i18n from '@/language/index';

// import 'virtual:windi.css';

// import 'virtual:windi-base.css';
// import 'virtual:windi-components.css';
// import 'virtual:windi-utilities.css';

import 'uno.css';
import '@/assets/style/main.scss';

export function createApp() {
  const app = createSSRApp(App);

  // Configure store
  setupStore(app);

  app.use(i18n);

  return {
    app,
  };
}
