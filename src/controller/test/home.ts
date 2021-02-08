import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/test')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
