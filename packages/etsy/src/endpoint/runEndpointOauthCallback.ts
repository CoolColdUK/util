import {Response} from 'express';
import {stateStore} from '../constants';
import {getEtsyAccessToken} from '../helper';

/**
 * end point used locally for testing and example
 * @returns
 */
export const runEndpointOauthCallback = async (
  res: Response,
  apiKey: string,
  redirectUrl: string,
  codeVerifier: string,
  authCode: string,
) => {
  // const authCode = req.query['code'] as string;
  // console.log(req.query, req.headers);
  const response = await getEtsyAccessToken(apiKey, redirectUrl, authCode, codeVerifier);

  if (response.status === 200) {
    const data = response.data;
    stateStore['token'] = data;
    res.send(data);
  } else {
    res.send('oops');
  }
};
