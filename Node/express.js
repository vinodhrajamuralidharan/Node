const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to express framework');
});

app.get('/express', (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(4210, () => {
  console.log('listening');
});
