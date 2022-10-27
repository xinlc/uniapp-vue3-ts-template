import type { HttpResponse } from 'luch-request';
import to from 'await-to-js';

type HttpPromise<T> = Promise<HttpResponse<T>>;

/**
 * to api
 */
export default function toApi<T, U = ApiResult>(promise: HttpPromise<T>) {
  return to<HttpResponse<T>, U>(promise);
}

/**
 * to api store
 */
export function toApiStore<T, U = ApiResult>(promise: Promise<T>) {
  return to<T, U>(promise);
}

// /**
//  * @param { Promise } promise
//  * @param { Object= } errorExt - Additional Information you can pass to the err object
//  * @return { Promise }
//  */
//  export function to<T, U = Error> (
//   promise: Promise<T>,
//   errorExt?: object
// ): Promise<[U, undefined] | [null, T]> {
//   return promise
//     .then<[null, T]>((data: T) => [null, data])
//     .catch<[U, undefined]>((err: U) => {
//       if (errorExt) {
//         const parsedError = Object.assign({}, err, errorExt);
//         return [parsedError, undefined];
//       }

//       return [err, undefined];
//     });
// }

// export default to;
