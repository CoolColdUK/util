import {Response} from 'express';
import {getEtsyAccessToken} from '../request/login/getEtsyAccessToken';

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
    /**
     * 	
access_token	"123456789.xxxxx....."
token_type	"Bearer"
expires_in	3600
refresh_token	"123456789.xxxxx...."
     */
    res.send(data);
  } else {
    res.send('oops');
  }
};
