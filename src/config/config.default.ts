import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo): DefaultConfig => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611909042040_5098';

  // add your config here
  // config.middleware = ['authenticatorMiddleware'];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.midwayFeature = {
    replaceEggLogger: true, // true 代表使用 midway logger  false 或者为空代表使用 egg-logger
  };

  config.session = {
    key: 'AIDM',
    maxAge: 24 * 3600 * 1000 * 30, // 30 天
    httpOnly: true,
    encrypt: true,
    renew: true,
  };

  config.passportLocal = {
    // usernameField: 'username',
    // passwordField: 'password',
  };

  config.onerror = {
    all(err, ctx) {
      ctx.set('content-type', 'application/json; charset=utf-8');
      ctx.body = JSON.stringify({
        code: -1,
        data: {},
        msg: err.message,
      });
    },
  };

  return config;
};
