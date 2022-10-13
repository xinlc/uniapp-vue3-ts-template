import { request } from '@/utils/http';

const LOGIN = '/login';
const LOGIN_OUT = '/logout';
const REFRESH_TOKEN = '/refresh/token';

/**
 * 登录
 * @param params
 */
export function login(params: LoginParams) {
  return request.post<LoginModel>(LOGIN, params, {
    custom: {
      auth: false,
    },
  });
}

/**
 * 登出
 */
export function logout() {
  return request.post(LOGIN_OUT, {});
}

/**
 * 刷新token
 */
export function refreshToken() {
  return request.post<LoginModel>(REFRESH_TOKEN, {});
}
