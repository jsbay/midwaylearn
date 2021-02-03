'use strict';
import { Provide, App, Config, ALL } from '@midwayjs/decorator';
import { IMidwayApplication } from '@midwayjs/core';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
// import { UserService } from '../service/user';
import { Context } from 'egg';

@Provide()
export class ReportMiddleware implements IWebMiddleware {
  @App()
  app: IMidwayApplication;
  @Config(ALL)
  allConfig;

  resolve() {
    return async (ctx: Context, next: IMidwayWebNext): Promise<void> => {
      const startTime = Date.now();
      await next();
      const runTime = Date.now() - startTime;
      const { method: reqMethod, protocol, ip, path } = ctx;
      // 获取运行环境
      const env = this.app.getEnv();

      // 获取环境变量
      // 方法 1
      // const { app } = this;
      // console.log(app.getConfig('mssql'));
      // 方法 2
      // console.log(this.allConfig.mssql);

      // const container = this.app.getApplicationContext();
      // const userService = await container.getAsync<UserService>(UserService);
      // console.log(await userService.getUser({ uid: 123 }));

      console.log(
        `${env}【${reqMethod}】${protocol}://${ip}${path} ${runTime}ms`
      );
    };
  }
}
