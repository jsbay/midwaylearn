import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Photo } from '../entities/Photo.entity';
import { Repository } from 'typeorm';

@Provide('v1')
export class PhotoService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  // save
  async savePhoto(): Promise<number> {
    // create a entity object
    const photo = new Photo();
    photo.name = 'Me and Bears';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.views = 1;
    photo.isPublished = true;

    // save entity
    const photoResult = await this.photoModel.save(photo);

    // save success
    console.log('photo id = ', photoResult.id);
    return photoResult.id;
  }
}
