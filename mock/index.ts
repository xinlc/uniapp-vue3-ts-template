import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/auth/token',
    timeout: 100,
    method: 'post',
    response: ({ query }: any) => {
      return {
        code: 0,
        data: {
          userName: 'admin',
          photo: 'https://xxx.png',
          time: new Date().getTime(),
          roles: ['admin'],
          authBtnList: ['btn.add', 'btn.del', 'btn.edit', 'btn.link'],
        },
        msg: null,
        type: 'success',
      };
    },
  },
] as MockMethod[];
