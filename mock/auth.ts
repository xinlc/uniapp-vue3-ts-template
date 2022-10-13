import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/login',
    timeout: 100,
    method: 'post',
    response: ({ query }: any) => {
      return {
        code: 0,
        data: {
          token: 'xxx',
        },
        msg: null,
        type: 'success',
      };
    },
  },

  {
    url: '/api/logout',
    timeout: 100,
    method: 'post',
    response: ({ query }: any) => {
      return {
        code: 0,
        data: {},
        msg: null,
        type: 'success',
      };
    },
  },
] as MockMethod[];
