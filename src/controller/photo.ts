import { Controller, Post, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { AIDMController, IResponse } from './controller';
import { PhotoService } from '../service/photo';

@Provide()
@Controller('/api/photo')
export class PhotoController extends AIDMController {
  @Inject()
  ctx: Context;

  @Inject()
  photoService: PhotoService;

  @Post('/save')
  async save(): Promise<IResponse> {
    const photoId = await this.photoService.save();
    return this.ok({ data: { id: photoId } });
  }
}
