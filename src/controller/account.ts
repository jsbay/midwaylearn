import {
  Controller,
  Post,
  Provide,
  Inject,
  Validate,
  Body,
  ALL,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { AIDMController, IResponse } from './controller';
import { AccountService } from '../service/account';
import { accountCreateDTO } from '../dto/account.dto';

@Provide()
@Controller('/api/account')
export class AccountController extends AIDMController {
  @Inject()
  ctx: Context;

  @Inject()
  accountService: AccountService;

  @Post('/create')
  @Validate()
  async create(@Body(ALL) account: accountCreateDTO): Promise<IResponse> {
    const res = await this.accountService.create(account);
    return this.ok({ data: { res } });
  }
}
