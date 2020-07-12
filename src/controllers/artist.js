const { Artist } = require('../src/models');

exports.create = (req, res) => {
    Artist.create(req.body).then((user) => res.status(201).json(user));
};