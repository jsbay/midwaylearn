import { Controller, Post, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { AIDMController, IResponse } from './controller';
import { PhotoService } from '../service/Photo.service';

@Provide()
@Controller('/api/photo')
export class PhotoController extends AIDMController {
  @Inject()
  ctx: Context;

  @Inject()
  photo: PhotoService;

  @Post('/save')
  async save(): Promise<IResponse> {
    await this.photo.savePhoto();
    return this.ok();
  }
}
