import { Rule, RuleType } from '@midwayjs/decorator';

export class accountCreateDTO {
  @Rule(RuleType.string().required().error(new Error("'nickname' 是必填的")))
  nickname: string;

  @Rule(RuleType.string().required().error(new Error("'placeID' 是必填的")))
  placeID: string;

  @Rule(
    RuleType.string().required().error(new Error("'publicOpenID' 是必填的"))
  )
  publicOpenID: string;

  @Rule(RuleType.string().required().error(new Error("'wechatID' 是必填的")))
  wechatID: string;

  @Rule(RuleType.string().required().error(new Error("'custID' 是必填的")))
  custID: string;

  @Rule(RuleType.number().required().error(new Error("'coins' 是必填的")))
  coins: number;
}
