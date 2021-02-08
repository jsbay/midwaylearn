'use strict';

import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';
import { AIDMController } from '../controller/controller';

@Provide()
export class AuthenticatorMiddleware implements IWebMiddleware {
  controller = new AIDMController();

  resolve() {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return async (ctx: Context, next: IMidwayWebNext) => {
      if (!ctx.isAuthenticated()) {
        ctx.body = this.controller.loginRequired();
        return;
      }
      await next();
    };
  }
}
