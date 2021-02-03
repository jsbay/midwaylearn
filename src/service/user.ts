import { Provide } from '@midwayjs/decorator';
import { IUserOptions, IUser } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions): Promise<IUser> {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
