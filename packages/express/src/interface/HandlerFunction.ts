import {MaybePromise} from '@coolcolduk/typescript-util';
import {Request} from 'express';

/**
 * Similar as express.Handler but return value instead of sending response
 */
export type HandlerFunction<T> = (req: Request) => MaybePromise<T>;
