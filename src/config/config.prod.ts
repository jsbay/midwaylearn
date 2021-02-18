import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { ConnectionOptions } from 'typeorm';

export type DefaultConfig = PowerPartial<EggAppConfig>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (appInfo: EggAppInfo): DefaultConfig => {
  const config = <DefaultConfig>{};
  config.orm = <ConnectionOptions>{
    type: 'mssql',
    server: '192.168.49.20',
    port: 1433,
    user: 'ATMP01',
    password: '10AD7A7a',
    database: 'ATMP',
    connectionTimeout: 120000,
    requestTimeout: 120000,
    logging: true,
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
