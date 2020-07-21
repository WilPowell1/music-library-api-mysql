const { Artist, Album } = require('../models');

exports.createAlbum = (req, res) => {
    Artist.create(req.body).then((user) => res.status(201).json(user));
};

/* exports.readAlbum = (req, res) => {
    const { id } = req.params;
    Artist.findByPk(id).then((artist) => {
        if (!artist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            res.status(200).json(artist);
        }
    });
}; */

/*  exports.updateAlbum = (req, res) => {
    const { id } = req.params;
    Artist.update(req.body, { where: { id } }).then(([rowsUpdated]) => {
        if (!rowsUpdated) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            res.status(200).json(rowsUpdated);
        }
    });
}; */

exports.deleteAlbum = (req, res) => {
    const { id } = req.params;
    Artist.findAll(id).then((artist) => {
        if (!artist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.destroy({ where: { id } }).then(() => {
                res.status(204).json({ message: 'The artist was deleted' });
            });
        }
    });
};