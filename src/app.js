const express = require('express');

const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');
const songRouter = require('./routes/song');

const app = express();

app.use(express.json());

artistRouter(app);

albumRouter(app);

songRouter(app);

module.exports = app;