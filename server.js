const express = require('express');

const app = express();

app.use(express.json());
app.use((req, _res, next) => {
  const now = new Date().toUTCString();
  const reqMeta = `${now}: ${req.method} - ${req.socket.remoteAddress}:${req.socket.remotePort}`;
  console.info(reqMeta);

  const queryKeys = Object.keys(req.query);
  if (queryKeys.length > 0) {
    console.info('Query: ', req.query);
  }

  const bodyKeys = Object.keys(req.body);
  if (bodyKeys.length > 0) {
    console.info('Body: ', req.body);
  }

  next();
});

app.get('', (_req, res) => {
  return res.status(200).json('Hello');
});

app.post('', (req, res) => {
  return res.status(200).json(req.body);
});

app.listen(3000);

module.exports = app;