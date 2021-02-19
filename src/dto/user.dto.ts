'use strict';
import { Rule, RuleType } from '@midwayjs/decorator';

export class UserLoginDTO {
  @Rule(RuleType.string().required().error(new Error("'username' 是必填的")))
  username: string;

  @Rule(RuleType.string().required().error(new Error("'password' 是必填的")))
  password: string;
}
