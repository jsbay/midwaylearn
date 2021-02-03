/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface IUser {
  uid: number;
  username: string;
  phone: string;
  email: string;
}
export interface IList<T> {
  list?: Array<T>;
}
export interface IResponse<T> {
  data: T;
  errMsg: string;
  code: 20000 | -1 | 50008 | 50009;
}
