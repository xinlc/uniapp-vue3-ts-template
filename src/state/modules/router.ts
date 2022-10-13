import { defineStore } from 'pinia';
import { Route } from '@/types/router/route';
import { pagesMap } from '@/utils/router/routes';

interface routeStore {
  routes: Map<string, Route> | undefined;
  currentRouter: Route | undefined;
}

export const useRouterStore = defineStore({
  id: 'routerStore',
  state: (): routeStore => ({
    routes: undefined,
    currentRouter: undefined,
  }),
  getters: {
    getRoutes(state) {
      return state.routes;
    },
    getCurrentRoute(state) {
      return state.currentRouter;
    },
  },
  actions: {
    initialize() {
      this.setRoutes();
    },
    setRoutes() {
      this.routes = pagesMap;
    },
    setCurrentRoute(path: string) {
      this.currentRouter = this.routes?.get(path) || undefined;
    },
  },
});
