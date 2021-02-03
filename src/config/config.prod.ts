import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo): DefaultConfig => {
  const config = {} as DefaultConfig;
  config.mssql = {
    host: 'prod',
  };
  return config;
};
