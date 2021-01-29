import { hasUncaughtExceptionCaptureCallback } from 'process';

/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export type IResonesCode = 20000 | -1 | 50008 | 50009;
export interface IResponse {
  data: Record<string, unknown>;
  errMsg: string;
  code: IResonesCode;
}
