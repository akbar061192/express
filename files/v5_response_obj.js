const express = require('express');
const app = express();

const port = process.env.port | 3000;
const path = require('path');

const imgFile = __dirname + '/candy.jpeg'; // absolute path for the file

app.get('/', (req, res) => {
  // res.send('hi'); // looks at the content to figure out the type
  //res.end(); // no type header set and no content too
  //res.sendFile(imgFile, err => console.log(err)); // send file as response
  //res.json({ fetch: 'success' }); //send type as application/json
  //res.redirect(301, '/newpath'); // redirecting to new path if other old path is no more exists
});

app.listen(3000, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}`);
});
