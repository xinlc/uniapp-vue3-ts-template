import { request } from '@/utils/http';

import { ILogin, ILoginParams } from '@/api/model/login';

export const signIn = (form: ILoginParams) =>
  request.post<ILogin>('/auth/token', form);
