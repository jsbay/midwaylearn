import { Rule, RuleType } from '@midwayjs/decorator';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

export class accountCreateDTO {
  @CreateApiPropertyDoc('user nickname')
  @Rule(RuleType.string().required())
  nickname: string;

  @CreateApiPropertyDoc('user nickname')
  @Rule(RuleType.string().required())
  placeID: string;

  @CreateApiPropertyDoc('user nickname')
  @Rule(RuleType.string().required())
  publicOpenID: string;

  @CreateApiPropertyDoc('user nickname')
  @Rule(RuleType.string().required())
  wechatID: string;

  @CreateApiPropertyDoc('user custID')
  @Rule(RuleType.string().required())
  custID: string;

  @CreateApiPropertyDoc('user 金币数')
  @Rule(RuleType.number().required())
  coins: number;
}

export class accountUpdateDTO {
  @CreateApiPropertyDoc('user id')
  @Rule(RuleType.number().min(1).required())
  id: number;

  @CreateApiPropertyDoc('user nickname')
  @Rule(RuleType.string())
  nickname: string;

  @CreateApiPropertyDoc('user placeID')
  @Rule(RuleType.string())
  placeID: string;

  @CreateApiPropertyDoc('user publicOpenID')
  @Rule(RuleType.string())
  publicOpenID: string;

  @CreateApiPropertyDoc('user wechatID')
  @Rule(RuleType.string())
  wechatID: string;

  @CreateApiPropertyDoc('user custID')
  @Rule(RuleType.string())
  custID: string;

  @CreateApiPropertyDoc('user 金币数')
  @Rule(RuleType.number())
  coins: number;
}
