const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req.url);
  console.log(req.hostname);
  console.log(req.protocol);
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  console.log(req.path);
  console.log(req.headers);
  console.log(req.method);
  console.log(req.subdomains);
  res.send('<h1> http req object methods </h1>');
});

app.listen(3000, err => {
  if (err) {
    console.log('Something went wrong..', err);
    return;
  }
  console.log('Listening on port 3000...');
});
