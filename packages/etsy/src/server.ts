// Import the express library
import express from 'express';
import {ETSY_API_KEY, PORT, SERVER_URL} from './constants';
import {createEndpointPing} from './endpoint/createEndpointPing';
import {EtsyScopeEnum} from './enum/EtsyScopeEnum';
import buildEtsyOauthUrl from './helper/login/buildEtsyOauthUrl';

const app = express();

// Send a "Hello World!" response to a default get request
app.get('/', (_req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(
    `<a href="${buildEtsyOauthUrl(ETSY_API_KEY, SERVER_URL + '/oauth/redirect', EtsyScopeEnum.EMAIL_READ)}">login</a>`,
  );
});
app.get('/ping', createEndpointPing(ETSY_API_KEY));
app.get('/oauth/redirect', createEndpointPing(ETSY_API_KEY));

// Start the server on port 3003
app.listen(PORT, () => {
  console.log(`Example app listening at ${SERVER_URL}`);
});
