module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
    };

    const Song = sequelize.define('Song', schema);
    return Aong;
};