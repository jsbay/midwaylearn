import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { ConnectionOptions } from 'typeorm';

export type DefaultConfig = PowerPartial<EggAppConfig>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (appInfo: EggAppInfo): DefaultConfig => {
  const config = <DefaultConfig>{};
  // config.orm = <ConnectionOptions>{
  //   type: 'mssql',
  //   server: '192.168.49.20',
  //   port: 1433,
  //   username: 'ATMP01',
  //   password: '10AD7A7a',
  //   database: 'ATMP',
  //   connectionTimeout: 120000,
  //   requestTimeout: 120000,
  //   logging: true,
  // };
  config.orm = <ConnectionOptions>{
    type: 'mysql',
    host: '112.126.58.34',
    port: 3306,
    username: 'root',
    password: 'Bai930706..',
    database: 'cityHero',
    entities: ['../entities/*'],
    connectionTimeout: 120000,
    requestTimeout: 120000,
    // 是否需要在每次应用启动后自动对数据库的视图 Schema 进行自动的 Migration
    synchronize: true,
    // logging: true,
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
