const express = require('express');

const app = express();

app.use(express.json());

app.post('', (req, res) => {
  console.info(req.body);
  return res.status(200).json(req.body);
});

app.listen(3000);

module.exports = app;