import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Account } from '../entities/Account.entity';
import { Repository } from 'typeorm';
import { accountCreateDTO, accountUpdateDTO } from '../dto/account.dto';

@Provide()
export class AccountService {
  @InjectEntityModel(Account)
  accountModel: Repository<Account>;

  async create(data: accountCreateDTO): Promise<Account> {
    const account = new Account();
    for (const key in data) {
      data[key] && Object.defineProperty(account, key, { value: data[key] });
    }
    return await this.accountModel.save(account);
  }

  async update(data: accountUpdateDTO): Promise<Account> {
    const account = await this.accountModel.findOneOrFail(data.id);
    if (!account) {
      throw new Error('不存在的 id');
    }
    for (const key in data) {
      data[key] && Object.defineProperty(account, key, { value: data[key] });
    }
    return await this.accountModel.save(account);
  }

  async findAll(): Promise<Account[]> {
    return await this.accountModel.find();
  }
}
