import {
  Controller,
  Get,
  Provide,
  Inject,
  Param,
  Query,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { CreateApiDoc } from '@midwayjs/swagger';
import { AIDMController, IResponse } from './controller';

@Provide()
@Controller('/api/test', { tagName: '测试', description: 'ceshi' })
export class TestController extends AIDMController {
  @Inject()
  ctx: Context;

  @(CreateApiDoc().summary('测试').description('ceshi').build())
  @Get('/')
  async get(params: unknown): Promise<IResponse> {
    return this.ok(params);
  }

  @(CreateApiDoc()
    .summary('get user')
    .description('This a a open api for get user')
    .param('用户 id', {
      required: true,
      example: 2,
    })
    .param(' 用户 name')
    .respond(200, '成功', 'text', {
      example: 'hello world',
    })
    .respond(500, 'throw error')
    .build())
  @Get('/:userId')
  async getUser(
    @Param() userId: number,
    @Query() name?: string
  ): Promise<IResponse> {
    return this.ok({
      data: {
        userId,
        name,
        nickname: 'Bay 丶',
        age: 18,
      },
    });
  }
}
