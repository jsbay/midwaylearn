import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Account } from '../entities/Account.entity';
import { Repository } from 'typeorm';
import { accountCreateDTO } from '../dto/account.dto';

@Provide()
export class AccountService {
  @InjectEntityModel(Account)
  accountModel: Repository<Account>;

  async create(data: accountCreateDTO): Promise<Account> {
    const account = new Account();
    for (const key in data) {
      data[key] && Object.defineProperty(account, key, { value: data[key] });
    }
    console.log(account);

    return await this.accountModel.save(account);
  }
}
