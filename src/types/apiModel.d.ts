declare interface API<T = any> {
  code: number;
  data?: T;
  message: string;
}
