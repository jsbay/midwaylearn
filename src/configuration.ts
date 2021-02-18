import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as swagger from '@midwayjs/swagger';
import { getConnection } from 'typeorm';

@Configuration({
  imports: [
    // [ Midway ] start error: Connection "default" was not found.
    // { component: orm },
    '@midwayjs/orm',
    {
      component: swagger,
      enabledEnvironment: ['local', 'pre'],
    },
  ],
  importConfigs: ['./config'],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady(): Promise<void> {
    const connection = getConnection();
    console.log(`[ TypeORM ] connection [${connection.name}] established`);
  }
}
