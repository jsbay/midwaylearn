'use strict';
import { Provide, Aspect, IMethodAspect, JoinPoint } from '@midwayjs/decorator';
import { UserControllerV1 } from '../controller/v1/user';
import { AIDMController } from '../controller/controller';

@Provide()
@Aspect([UserControllerV1])
export class GlobalErrorAspect implements IMethodAspect {
  controller = new AIDMController();
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async afterThrow(point: JoinPoint, error) {
    if (error) {
      const { ctx } = point.target;
      ctx.body = this.controller.err({ msg: error.message });
    }
  }
}
