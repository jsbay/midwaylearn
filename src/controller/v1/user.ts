import {
  Controller,
  Get,
  Post,
  Body,
  ALL,
  Provide,
  Inject,
  Validate,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { AIDMController, IResponse } from '../controller';
import { UserLoginDTOV1 } from '../../dto/v1/user';

@Provide()
@Controller('/api/v1')
export class UserControllerV1 extends AIDMController {
  @Inject()
  ctx: Context;

  @Post('/login')
  @Validate()
  async Login(@Body(ALL) user: UserLoginDTOV1): Promise<IResponse> {
    await this.ctx.login(user);
    return this.ok({ data: { user } });
  }

  @Post('/logout')
  async Logout(): Promise<IResponse> {
    await this.ctx.logout();
    return this.ok();
  }

  @Get('/info')
  async Info(): Promise<IResponse> {
    return this.ok();
  }

  @Post('/register')
  async Register(): Promise<IResponse> {
    return this.ok();
  }
}
