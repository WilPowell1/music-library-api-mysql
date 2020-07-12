const express = require('express');

const artistControllers = require('./controllers/artists');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

app.use(express.json());
app.post('/artists', artistControllers.create);

module.exports = app;