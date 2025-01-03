import {RequestHandler} from 'express';
import {etsyPing} from '../helper/request/etsyPing';

export const createEndpointPing: (apiKey: string) => RequestHandler = (apiKey) => async (_req, res) => {
  const response = await etsyPing(apiKey);

  if (response.ok) {
    const data = await response.json();
    res.send(data);
  } else {
    res.send('oops');
  }
};
