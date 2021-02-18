import { Controller, Post, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { AIDMController, IResponse } from '../controller';
import { PhotoService } from '../../service/v1/aphoto';

@Provide()
@Controller('/api/v1/photo')
export class PhotoControllerV1 extends AIDMController {
  @Inject()
  ctx: Context;

  @Inject('v1')
  photo: PhotoService;

  @Post('/save')
  async save(): Promise<IResponse> {
    await this.photo.savePhoto();
    return this.ok();
  }
}
