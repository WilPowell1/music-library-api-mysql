module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
    };

    const Album = sequelize.define('Album', schema);
    return Album;
};