import {RequestHandler} from 'express';
import {pingEtsy} from '../request/other/pingEtsy';

/**
 * end point used locally for testing and example
 * @returns
 */
export const createEndpointPing: (apiKey: string, apiSecret: string) => RequestHandler =
  (apiKey, apiSecret) => async (_req, res) => {
    const response = await pingEtsy(apiKey, apiSecret);
    if (response.status === 200) {
      res.send(response.data);
    } else {
      res.send('oops');
    }
  };
