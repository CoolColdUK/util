import {RequestHandler} from 'express';
import {pingEtsy} from '../helper/request/other/pingEtsy';

/**
 * end point used locally for testing and example
 * @returns
 */
export const createEndpointPing: (apiKey: string) => RequestHandler = (apiKey) => async (_req, res) => {
  const response = await pingEtsy(apiKey);
  if (response.status === 200) {
    res.send(response.data);
  } else {
    res.send('oops');
  }
};
