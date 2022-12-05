const express = require('express');
const app = express();
const { sup, how } = require('./middleware');

app.use([sup, how]);

app.get('/', (req, res) => {
  res.send({ data: true });
});

app.listen(3000, err => {
  if (err) {
    console.log('Something went wrong..', err);
    return;
  }
  console.log('Listening on port 3000...');
});
