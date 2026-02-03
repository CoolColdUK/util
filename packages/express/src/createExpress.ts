import {castArray} from '@coolcolduk/util';
import cors, {CorsOptions} from 'cors';
import express, {ErrorRequestHandler, Handler} from 'express';
import {ExpressMethod} from './enum/ExpressMethod';

export interface CreateExpressData {
  method?: ExpressMethod;
  handler: Handler | Handler[];
}

export interface CreateExpressOptions {
  cors?: CorsOptions;
  errorHandler?: ErrorRequestHandler;
  middleware?: Handler[];
}

export function createExpress(route: Record<string, CreateExpressData>, options?: CreateExpressOptions) {
  const app = express();

  if (options?.cors) app.use(cors(options.cors));
  if (options?.middleware) options.middleware.forEach((m) => app.use(m));

  Object.entries(route).forEach(([k, v]) => {
    switch (v.method) {
      case ExpressMethod.GET:
        app.get(`/${k}`, ...castArray(v.handler));
        return;
      case ExpressMethod.PUT:
        app.put(`/${k}`, ...castArray(v.handler));
        return;
      case ExpressMethod.DELETE:
        app.delete(`/${k}`, ...castArray(v.handler));
        return;
      case ExpressMethod.POST:
        app.post(`/${k}`, ...castArray(v.handler));
        return;
      case ExpressMethod.PATCH:
        app.patch(`/${k}`, ...castArray(v.handler));
        return;
      case ExpressMethod.OPTIONS:
        app.options(`/${k}`, ...castArray(v.handler));
        return;
      case ExpressMethod.HEAD:
        app.head(`/${k}`, ...castArray(v.handler));
        return;
      default:
        app.all(`/${k}`, ...castArray(v.handler));
    }
  });

  /**
   * error handler, do NOT remove the next parameter otherwise it won't work
   */
  if (options?.errorHandler) app.use(options.errorHandler);

  return app;
}
