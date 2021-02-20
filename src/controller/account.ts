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
import { CreateApiDoc } from '@midwayjs/swagger';
import { AIDMController, IResponse } from './controller';
import { AccountService } from '../service/account';
import { accountCreateDTO, accountUpdateDTO } from '../dto/account.dto';

@Provide()
@Controller('/api/account', {
  tagName: '账户操作',
  description: '账户操作',
})
export class AccountController extends AIDMController {
  @Inject()
  ctx: Context;

  @Inject()
  accountService: AccountService;

  @(CreateApiDoc().summary('创建').description('创建').build())
  @Post('/')
  @Validate()
  async create(@Body(ALL) account: accountCreateDTO): Promise<IResponse> {
    const res = await this.accountService.create(account);
    return this.ok({ data: { res } });
  }

  @(CreateApiDoc()
    .summary('更新')
    .description('更新')
    .respond(200, '成功', 'json', {
      example: {
        code: 0,
        data: {
          id: 1,
          nickname: 'string',
          placeID: 'string',
          publicOpenID: 'string',
          wechatID: 'string',
          custID: 'string',
          coins: 0,
        },
        msg: 'success',
      },
    })
    .build())
  @Patch('/')
  @Validate()
  async update(@Body(ALL) account: accountUpdateDTO): Promise<IResponse> {
    const res = await this.accountService.update(account);
    return this.ok({ data: { res } });
  }

  @(CreateApiDoc().summary('获取所有').description('获取所有').build())
  @Get('s')
  async list(): Promise<IResponse> {
    const res = await this.accountService.findAll();
    return this.ok({ data: { res } });
  }
}
