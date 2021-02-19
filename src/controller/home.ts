import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/api')
export class V1HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
