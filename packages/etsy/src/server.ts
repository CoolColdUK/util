// Import the express library
import {buildPkce} from '@coolcolduk/util';
import express from 'express';
import {ETSY_API_KEY, OAUTH_CALLBACK, OAUTH_REDIRECT, PORT, SERVER_URL, stateStore} from './constants';
import {createEndpointPing} from './endpoint/createEndpointPing';
import {runEndpointOauthCallback} from './endpoint/runEndpointOauthCallback';
import {buildEtsyOauthUrl} from './helper/login/buildEtsyOauthUrl';
import {filterEtsyScopeEnum} from './helper/util/filterEtsyScopeEnum';

const app = express();

// Send a "Hello World!" response to a default get request
app.get('/', (_req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(`<a href="${OAUTH_REDIRECT}">login</a>`);
});

app.get('/ping', createEndpointPing(ETSY_API_KEY));

app.get(OAUTH_REDIRECT, (req, res) => {
  const data = buildPkce();
  stateStore['state'] = data;
  const scope = filterEtsyScopeEnum(req.query['scope']);
  // console.log(scopeFiltered);
  // res.send(scopeFiltered);
  res.redirect(buildEtsyOauthUrl(ETSY_API_KEY, SERVER_URL + OAUTH_CALLBACK, scope, data));
});

app.get(OAUTH_CALLBACK, (req, res) => {
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
