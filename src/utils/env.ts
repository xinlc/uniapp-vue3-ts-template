import pkg from '../../package.json';
import { judgePlatform } from '@/utils/platform';
import { PLATFORMS } from '@/enums/platformEnum';

/**
 * @description: Generate cache key according to version
 */
export function getPkgVersion() {
  return `${`__${pkg.version}`}__`.toUpperCase();
}

/**
 * @description: Development mode
 */
export const devMode = 'development';

/**
 * @description: Production mode
 */
export const prodMode = 'production';

/**
 * @description: Get environment mode
 * @returns:
 * @example:
 */
export function getEnvMode(): string {
  return isDevMode() ? devMode : prodMode;
}

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnvValue<T = any>(key: string): T {
  // 注意：拿到的都是 string 类型
  // @ts-ignore
  return import.meta.env[key];
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return getEnvValue<string>('VITE_DEV') === 'true';
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return getEnvValue<string>('VITE_PROD') === 'true';
}

/**
 * @description: Get environment VITE_BASE_URL value
 * @returns:
 * @example:
 */
export function getBaseUrl(): string {
  if (judgePlatform(PLATFORMS.H5) && isDevMode()) return '/api';
  return getEnvValue<string>('VITE_BASE_URL');
}

/**
 * @description: Get environment VITE_UPLOAD_URL value
 * @returns:
 * @example:
 */
export function getUploadUrl(): string {
  if (judgePlatform(PLATFORMS.H5) && isDevMode()) return '/upload';
  return getEnvValue<string>('VITE_UPLOAD_URL');
}

/**
 * @description: Get environment VITE_IMAGE_URL value
 * @returns:
 * @example:
 */
export function getImageUrl(): string {
  return getEnvValue<string>('VITE_IMAGE_URL');
}
