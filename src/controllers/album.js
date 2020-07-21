const { Artist, Album } = require('../models');

exports.createAlbum = (req, res) => {
    const { id } = req.params.id;
    Artist.findByPk(id).then((foundArtist) => {
        if (!foundArtist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.create(req.body).then((album) => {
                album.setArtist(id).then((foundAlbum) => {
                    res.status(201).send(foundAlbum);
                });
            });
        }
    });
};

/*exports.readAlbum = (req, res) => {
    const { id } = req.params.id;
    Artist.findByPk(id).then((artist) => {
        if (!artist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            res.status(200).json(artist);
        }
    });
};

exports.updateAlbum = (req, res) => {
    const { id } = req.params.id;
    Artist.update(req.body, { where: { id } }).then(([rowsUpdated]) => {
        if (!rowsUpdated) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            res.status(200).json(rowsUpdated);
        }
    });
};*/

exports.deleteAlbum = (req, res) => {
    const { id } = req.params.id;
    Artist.findAll(id).then((deleteAlbum) => {
        if (!deleteAlbum) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.destroy({ where: { artistId: id } }).then(() => {
                res.status(204).json(deleteAlbum);
            });
        }
    });
};