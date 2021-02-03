import {
  Inject,
  Controller,
  Post,
  Provide,
  Query,
  Get,
  SetHeader,
  HttpCode,
} from '@midwayjs/decorator';
import { Context } from 'egg';

import { UserService } from '../service/user';
import { IResponse, IList, IUser } from '../interface';
interface resoponse extends IList<IUser>, IUser {}
@Provide()
@Controller('/api', { middleware: ['reportMiddleware'] })
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  @Get('/get_user')
  @SetHeader('x-bbb', '123')
  @SetHeader('x-abc', '123')
  @HttpCode(201)
  async getUser(@Query() uid: number): Promise<IResponse<resoponse>> {
    console.log(this.ctx.ip);

    const user = await this.userService.getUser({ uid });
    const list: IList<IUser> = {
      list: [
        {
          uid: 1,
          username: 'bay',
          phone: '1241443423',
          email: '2312312321@qq.com',
        },
      ],
    };

    const r: IResponse<resoponse> = {
      data: {
        ...user,
        ...list,
      },
      errMsg: '',
      code: 20000,
    };

    return r;
  }
}
