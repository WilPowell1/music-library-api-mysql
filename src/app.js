const express = require('express');

const artistControllers = require('./controllers/artist');
//const artistRouter = require('./routes/artist');
//const albumRouter = require('./routes/album');

const albumControllers = require('./controllers/album');
const songControllers = require('./controllers/song');

const app = express();

app.use(express.json());

//artist//
app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
app.get('/artists/:id', artistControllers.getArtistById);
app.patch('/artists/:id', artistControllers.updateArtist);
app.delete('/artists/:id', artistControllers.delete);

//album//
app.post('/artists/:artistId/albums', albumControllers.createAlbum);
app.get('/artists/:artistId/albums', albumControllers.readAlbumByArtistId);
app.get(
    '/artists/:artistId/albums/:albumId',
    albumControllers.readAlbumByAlbumId
);
app.patch('/artists/:artistId/albums/:albumId', albumControllers.updateAlbum);
app.delete('/artists/:artistId/albums/:albumId', albumControllers.deleteAlbum);

//song//
app.get('/album/:albumId/song', songControllers.create);

module.exports = app;