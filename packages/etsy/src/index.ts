// Import the express library
import express from 'express';
import {PORT} from './constants';

const app = express();

// Send a "Hello World!" response to a default get request
app.get('/', (_req, res) => {
  res.send('Hello, world!');
});

// Start the server on port 3003
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
