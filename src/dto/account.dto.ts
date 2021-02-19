import { Rule, RuleType } from '@midwayjs/decorator';

export class accountCreateDTO {
  @Rule(RuleType.string().required())
  nickname: string;

  @Rule(RuleType.string().required())
  placeID: string;

  @Rule(RuleType.string().required())
  publicOpenID: string;

  @Rule(RuleType.string().required())
  wechatID: string;

  @Rule(RuleType.string().required())
  custID: string;

  @Rule(RuleType.number().required())
  coins: number;
}

export class accountUpdateDTO {
  @Rule(RuleType.number().min(1).required())
  id: number;

  @Rule(RuleType.string())
  nickname: string;

  @Rule(RuleType.string())
  placeID: string;

  @Rule(RuleType.string())
  publicOpenID: string;

  @Rule(RuleType.string())
  wechatID: string;

  @Rule(RuleType.string())
  custID: string;

  @Rule(RuleType.number())
  coins: number;
}
