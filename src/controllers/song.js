const { Artist, Album, Song } = require('../models');

exports.create = (req, res) => {
    const artistId = req.params.artistId;
    const albumId = req.params.albumId;

    Artist.findByPk(artistId).then((foundArtist) => {
        if (!foundArtist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.findByPk(albumId).then((foundAlbum) => {
                if (!foundAlbum) {
                    res.status(404).json({ error: 'The album could not be found.' });
                } else {
                    Song.create({
                        name: req.body.name,
                        artistId: artistId,
                        albumId: albumId,
                    }).then((newSong) => {
                        Song.findByPk(newSong.id, {
                            include: {
                                model: Artist,
                                as: 'Artist',
                            },
                        }).then((foundAlbums) => {
                            res.status(201).json(foundAlbums);
                        });
                    });
                }
            });
        }
    });
};