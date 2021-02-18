import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { getConnection } from 'typeorm';

@Configuration({
  imports: [
    { component: '@midwayjs/orm' },
    {
      component: '@midwayjs/swagger',
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
