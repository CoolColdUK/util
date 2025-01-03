// Import the express library
import express from 'express';
import {ETSY_API_KEY, PORT} from './constants';
import {createEndpointPing} from './endpoint/createEndpointPing';

const app = express();

// Send a "Hello World!" response to a default get request
app.get('/', (_req, res) => {
  res.send('Hello, world!');
});
app.get('/ping', createEndpointPing(ETSY_API_KEY));

// Start the server on port 3003
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
