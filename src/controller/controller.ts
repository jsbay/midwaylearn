'use strict';

export interface IResponse {
  code?: 0 | -1 | 50008 | 50018;
  data?: unknown;
  msg?: string;
}

export class AIDMController {
  ok(option?: IResponse): IResponse {
    if (!option) {
      return { code: 0, data: {}, msg: 'success' };
    }
    return {
      code: option.code || 0,
      data: option.data || {},
      msg: option.msg || 'success',
    };
  }

  err(option?: IResponse): IResponse {
    if (!option) {
      return { code: -1, data: {}, msg: 'error' };
    }
    return {
      code: option.code || -1,
      data: option.data || {},
      msg: option.msg || 'error',
    };
  }
  loginRequired(option?: IResponse): IResponse {
    if (!option) {
      return { code: 50008, data: {}, msg: 'login required' };
    }
    return {
      code: option.code || 50008,
      data: option.data || {},
      msg: option.msg || 'login required',
    };
  }
}
