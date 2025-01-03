// Import the express library
import {buildPkce} from '@coolcolduk/util';
import express from 'express';
import {ETSY_API_KEY, OAUTH_REDIRECT, PORT, SERVER_URL, stateStore} from './constants';
import {createEndpointPing} from './endpoint/createEndpointPing';
import {runEndpointOauthCallback} from './endpoint/runEndpointOauthCallback';
import {EtsyScopeEnum} from './enum/EtsyScopeEnum';
import {buildEtsyOauthUrl} from './helper/login/buildEtsyOauthUrl';

const app = express();

// Send a "Hello World!" response to a default get request
app.get('/', (_req, res) => {
  const data = buildPkce();
  stateStore['state'] = data;
  res.set('Content-Type', 'text/html');
  res.send(
    `<a href="${buildEtsyOauthUrl(ETSY_API_KEY, SERVER_URL + OAUTH_REDIRECT, EtsyScopeEnum.EMAIL_READ, data)}">login</a>`,
  );
});

app.get('/ping', createEndpointPing(ETSY_API_KEY));

app.get(OAUTH_REDIRECT, (req, res) => {
  runEndpointOauthCallback(
    res,
    ETSY_API_KEY,
    SERVER_URL + OAUTH_REDIRECT,
    stateStore['state']?.codeVerifier || '',
    (req.query['code'] as string) || '',
  );
});

// Start the server on port 3003
app.listen(PORT, () => {
  console.log(`Example app listening at ${SERVER_URL}`);
});
