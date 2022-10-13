import {
  routerInterceptor,
  routerRemoveInterceptor,
} from '@/utils/router/interceptor';

export function setupInterceptors() {
  routerInterceptor();
}

export function removeInterceptor() {
  routerRemoveInterceptor();
}
