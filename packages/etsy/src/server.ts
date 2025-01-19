// Import the express library
import {buildPkce, extractPkce} from '@coolcolduk/util';
import express from 'express';
import {ETSY_API_KEY, OAUTH_CALLBACK, OAUTH_REDIRECT, PORT, SERVER_URL} from './constants';
import {createEndpointPing} from './endpoint/createEndpointPing';
import {runEndpointOauthCallback} from './endpoint/runEndpointOauthCallback';
import {buildEtsyOauthUrl} from './helper/login/buildEtsyOauthUrl';
import {filterEtsyScopeEnum} from './helper/util/filterEtsyScopeEnum';

const key = 'ergheioghoe333rijgeirgj43wt3w';
const app = express();

// Send a "Hello World!" response to a default get request
app.get('/', (_req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(`<a href="${OAUTH_REDIRECT}">login</a>`);
});

app.get('/ping', createEndpointPing(ETSY_API_KEY));

app.get(OAUTH_REDIRECT, (req, res) => {
  const data = buildPkce(key);
  console.log('input', data);
  const scope = filterEtsyScopeEnum(req.query['scope']);

  res.redirect(buildEtsyOauthUrl(ETSY_API_KEY, SERVER_URL + OAUTH_CALLBACK, scope, data));
});

app.get(OAUTH_CALLBACK, (req, res) => {
  const {state, code} = req.query;
  if (!code || typeof code !== 'string') throw new Error('code not found');
  if (!state || typeof state !== 'string') throw new Error('state not found');

  const output = extractPkce(key, state);
  console.log('output', output, ETSY_API_KEY, SERVER_URL + OAUTH_CALLBACK, output.codeVerifier, code);
  runEndpointOauthCallback(res, ETSY_API_KEY, SERVER_URL + OAUTH_CALLBACK, output.codeVerifier, code);
});

// Start the server on port 3003
app.listen(PORT, () => {
  console.log(`Example app listening at ${SERVER_URL}`);
});
