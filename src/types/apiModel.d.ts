declare interface ApiResult<T = any> {
  code: number;
  success: boolean;
  data?: T;
  msg: string;
}
