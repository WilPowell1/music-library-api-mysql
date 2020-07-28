const { Artist, Album } = require('../models');

exports.createAlbum = (req, res) => {
    const artistId = req.params.artistId;

    Artist.findByPk(artistId).then((foundArtist) => {
        if (!foundArtist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.create(req.body).then((album) => {
                album.setArtist(artistId).then((foundAlbum) => {
                    console.log(foundAlbum);
                    res.status(201).send(foundAlbum);
                });
            });
        }
    });
};

exports.readAlbumByArtistId = (req, res) => {
    const artistId = req.params.artistId;

    Artist.findByPk(artistId).then((artist) => {
        if (!artist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.findAll({ where: { artistId: artistId } }).then((album) => {
                res.status(200).json(album);
            });
        }
    });
};

exports.readAlbumByAlbumId = (req, res) => {
    const artistId = req.params.artistId;
    const albumId = req.params.albumId;

    Album.findAll({ where: { id: albumId, artistId: artistId } }).then(
        (foundAlbum) => {
            if (foundAlbum.length === 0) {
                res.status(404).json({ error: 'The album could not be found.' });
            } else {
                res.status(200).json(foundAlbum);
            }
        }
    );
};

exports.updateAlbum = (req, res) => {
    const artistId = req.params.artistId;
    const albumId = req.params.albumId;

    Album.findAll({ where: { artistId: artistId, id: albumId } }).then(
        (foundAlbums) => {
            if (!foundAlbums) {
                res.status(404).json({ error: 'The album could not be found.' });
            } else {
                Album.update(req.body, {
                    where: { artistId: artistId, id: albumId },
                }).then((updatedAlbum) => {
                    res.status(200).json(updatedAlbum);
                });
            }
        }
    );
};

exports.deleteAlbum = (req, res) => {
    const artistId = req.params.artistId;
    const albumId = req.params.albumId;

    Album.destroy({
        where: { id: albumId, artistId: artistId },
    }).then((deletedAlbum) => {
        if (!deletedAlbum) {
            res.status(404).json({ error: 'The album could not be found.' });
        } else {
            res.status(204).json(deletedAlbum);
        }
    });
};