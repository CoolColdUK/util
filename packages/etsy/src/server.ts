// Import the express library
import {buildPkce, extractPkce} from '@coolcolduk/crypto-util';
import express from 'express';
import {createEndpointPing} from './endpoint/createEndpointPing';
import {runEndpointOauthCallback} from './endpoint/runEndpointOauthCallback';
import {filterEtsyScopeEnum} from './util//filter/filterEtsyScopeEnum';
import {buildEtsyOauthUrl} from './util/buildEtsyOauthUrl';

const PORT = 3003;
const SERVER = 'http://localhost';
const SERVER_URL = SERVER + ':' + PORT;
const OAUTH_REDIRECT = '/oauth/redirect';
const OAUTH_CALLBACK = '/oauth/callback';

const ETSY_API_KEY = process.env['ETSY_API_KEY'] || '';

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
  const scope = filterEtsyScopeEnum(req.query['scope']);

  res.redirect(buildEtsyOauthUrl(ETSY_API_KEY, SERVER_URL + OAUTH_CALLBACK, scope, data));
});

app.get(OAUTH_CALLBACK, (req, res) => {
  const {state, code} = req.query;
  if (!code || typeof code !== 'string') throw new Error('code not found');
  if (!state || typeof state !== 'string') throw new Error('state not found');

  const output = extractPkce(key, state);
  runEndpointOauthCallback(res, ETSY_API_KEY, SERVER_URL + OAUTH_CALLBACK, output.codeVerifier, code);
});

// Start the server on port 3003
app.listen(PORT, () => {
  console.log(`Example app listening at ${SERVER_URL}`);
});
