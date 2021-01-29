import {
  Inject,
  Controller,
  Post,
  Provide,
  Query,
  Get,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';
import { IResponse } from '../interface';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  @Get('/get_user')
  async getUser(@Query() uid) {
    const user = await this.userService.getUser({ uid });
    const r: IResponse = {
      data: user,
      errMsg: '',
      code: 20000,
    };
    return r;
  }
}
