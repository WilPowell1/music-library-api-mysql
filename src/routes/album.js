const albumControllers = require('../controllers/album');

module.exports = (app) => {
    app.post('/artists/:artistId/albums', albumControllers.createAlbum);
    app.get('/artists/:artistId/albums', albumControllers.readAlbum);
    app.patch('/artists/:artistId/albums', albumControllers.updateAlbum);
    app.delete('/artists/:artistId/albums', albumControllers.deleteAlbum);
};