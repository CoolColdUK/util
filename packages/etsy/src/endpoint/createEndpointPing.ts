import {RequestHandler} from 'express';
import {API_ENDPOINT} from '../constants';

export const createEndpointPing: (apiKey: string) => RequestHandler = (apiKey) => async (_req, res) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
    },
  };

  const response = await fetch(API_ENDPOINT + '/application/openapi-ping', requestOptions);

  if (response.ok) {
    const data = await response.json();
    res.send(data);
  } else {
    res.send('oops');
  }
};
