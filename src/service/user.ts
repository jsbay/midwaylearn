import { Provide, App, Config, ALL } from '@midwayjs/decorator';
import { IUserOptions, IUser } from '../interface';
import { IMidwayApplication } from '@midwayjs/core';

@Provide()
export class UserService {
  @App()
  app: IMidwayApplication;
  @Config(ALL)
  allConfig;

  async getUser(options: IUserOptions): Promise<IUser> {
    // 获取运行环境
    // const env = this.app.getEnv();
    // console.log('from user.ts', env);

    // 获取环境变量
    // 方法 1
    // const { app } = this;
    // console.log('from user.ts', app.getConfig('mssql'));
    // 方法 2
    // console.log('from user.ts', this.allConfig.mssql);

    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
