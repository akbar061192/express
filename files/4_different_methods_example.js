const express = require('express');
const data = require('./data/data');
const app = express();

app.use(express.json());

app.get('/api/channels', (req, res) => {
  console.log('GET ALL CHANNELS');
  res.json(data);
  console.log('GET', data.channels);
});

app.get('/api/channels/:id', (req, res) => {
  console.log('GET SINGLE CHANNEL USING ID');
  const id = req.params.id;
  const singleChannel = data.channels.find(channel => {
    return channel.id === +id;
  });
  if (singleChannel) {
    res.status(200).json(singleChannel);
    console.log('GET SINGLE CHANNEL', singleChannel);
    return;
  }
  res.status(404).send({ msg: 'ID not found' });
});

app.post('/api/channels', (req, res) => {
  const userData = req.body;
  const nextId = data.channels.reduce((curr, prev) => {
    return curr > prev.id ? curr : prev.id + 1;
  }, 0);

  const newData = { id: nextId, name: userData.name, last_update: userData.last_update };
  data.channels.push(newData);
  res.status(201).json(newData);
  console.log('CHANNELS AFTER POST', data.channels);
});

app.put('/api/channels/:id', (req, res) => {
  console.log('PUT WITH ID');
  const { id } = req.params;
  const { name } = req.body;
  const last_update = Date.now();
  const idx = data.channels.findIndex(channel => channel.id === +id);
  data.channels[idx].name = name;
  data.channels[idx].last_update = last_update;
  res.status(200).json(data.channels[idx]);
  console.log('CHANNELS AFTER PUT', data.channels);
});

app.patch('/api/channels/:id', (req, res) => {
  console.log('PATCH WITH ID');
  const { id } = req.params;
  const { name } = req.body;
  const last_update = Date.now();
  const idx = data.channels.findIndex(channel => channel.id === +id);
  data.channels[idx].name = name;
  data.channels[idx].last_update = last_update;
  res.status(200).json(data.channels[idx]);
  console.log('CHANNELS AFTER PATCH', data.channels);
});

app.delete('/api/channels/:id', (req, res) => {
  console.log('DELETE WITH ID');
  const { id } = req.params;
  const fiteredChannels = data.channels.filter(channel => channel.id !== +id);
  data.channels = fiteredChannels;
  res.status(204).end();
  console.log('CHANNELS AFTER DELETE', data.channels);
});

app.head('/api/channels', (req, res) => {
  console.log('HEAD METHOD');
  res.status(200).end();
});

app.options('/api/channels', (req, res) => {
  console.log('OPTIONS METHOD');
  res.status(200);
  res.set('Allow', 'GET, POST, PUT, PATCH, DELETE, HEAD');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Length', '0');
  res.end();
});

// app listening
app.listen(3000, err => {
  if (err) {
    console.log('Something went wrong', err);
    return;
  }
  console.log('Listening on port 3000...');
});
