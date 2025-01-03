import {RequestHandler} from 'express';
import pingEtsy from '../helper/request/pingEtsy';

export const createEndpointPing: (apiKey: string) => RequestHandler = (apiKey) => async (_req, res) => {
  const response = await pingEtsy(apiKey);

  if (response.ok) {
    const data = await response.json();
    res.send(data);
  } else {
    res.send('oops');
  }
};
