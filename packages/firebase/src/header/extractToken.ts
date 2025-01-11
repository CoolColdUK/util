import {Request} from 'express';

/**
 * Extract token from header
 * @param req
 * @returns token or undefined if nto exists
 */
export function extractToken(req: Request): string | undefined {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    return req.headers.authorization.split('Bearer ')[1];
  }

  if (req.cookies && req.cookies.__session) {
    return req.cookies.__session;
  }

  return undefined;
}
