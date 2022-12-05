const express = require('express');
const app = express();

app
  .get('/', (req, res) => {
    res.send('<h1>hello</h1>'); //content type automatically determined
  })
  .post('/', (req, res) => {})
  .patch('/', (req, res) => {})
  .put('/', (req, res) => {})
  .delete('/', (req, res) => {});

// above same end point but different methods

app.get('/old', (req, res) => {
  res.redirect(301, '/new');
});

app.get('/new', (req, res) => {
  res.send('<h2>new page</h2>');
});

app.listen(3000, err => {
  if (err) {
    console.log('Something went wrong..', err);
    return;
  }
  console.log('Listening on port 3000...');
});
