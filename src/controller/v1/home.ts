import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/api/v1')
export class V1HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
