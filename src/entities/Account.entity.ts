import { EntityModel } from '@midwayjs/orm';

import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ width: 20 })
  nickname: string;

  @Column()
  placeID: string;

  @Column()
  publicOpenID: string;

  @Column()
  wechatID: string;

  @Column()
  custID: string;

  @Column({
    default: 0,
  })
  coins: number;
}
