import {
  Controller,
  Post,
  Patch,
  Get,
  Provide,
  Inject,
  Validate,
  Body,
  ALL,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { AIDMController, IResponse } from './controller';
import { AccountService } from '../service/account';
import { accountCreateDTO, accountUpdateDTO } from '../dto/account.dto';

@Provide()
@Controller('/api')
export class AccountController extends AIDMController {
  @Inject()
  ctx: Context;

  @Inject()
  accountService: AccountService;

  @Post('/account')
  @Validate()
  async create(@Body(ALL) account: accountCreateDTO): Promise<IResponse> {
    const res = await this.accountService.create(account);
    return this.ok({ data: { res } });
  }
  @Patch('/account')
  @Validate()
  async update(@Body(ALL) account: accountUpdateDTO): Promise<IResponse> {
    const res = await this.accountService.update(account);
    return this.ok({ data: { res } });
  }

  @Get('/accounts')
  @Validate()
  async list(): Promise<IResponse> {
    const res = await this.accountService.findAll();
    return this.ok({ data: { res } });
  }
}
