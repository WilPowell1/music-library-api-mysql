const artistControllers = require('../controllers/artist');

//artist//
module.exports = (app) = {
    app.post('/artists', artistControllers.create);
    app.get('/artists', artistControllers.list);
    app.get('/artists/:id', artistControllers.getArtistById);
    app.patch('/artists/:id', artistControllers.updateArtist);
    app.delete('/artists/:id', artistControllers.delete);
};