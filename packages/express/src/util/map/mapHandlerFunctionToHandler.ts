import {Handler} from 'express';
import {HandlerFunction} from '../../interface/HandlerFunction';

export function mapHandlerFunctionToHandler(fn: HandlerFunction<any>): Handler {
  return async (req, res, next) => {
    try {
      const rtn = await fn(req);
      res.send(rtn);
    } catch (e) {
      next(e);
    }
  };
}
