import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (appInfo: EggAppInfo): DefaultConfig => {
  const config = <DefaultConfig>{};
  config.mssql = {
    server: '192.168.49.10',
    port: 1433,
    user: 'ATMP01',
    password: '10AD7A7a',
    database: 'ATMP',
    connectionTimeout: 120000,
    requestTimeout: 120000,
    resultCodeField: 'resultCode',
    resultMsgField: 'resultMsg',
  };
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: '',
      db: 0,
    },
  };
  // config.sessionRedis = {
  //   name: appInfo.name,
  // };
  return config;
};
