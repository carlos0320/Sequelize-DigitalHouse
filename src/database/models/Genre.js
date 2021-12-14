module.exports = (sequelize, dataTypes) => {
    const alias = 'genres';

    const columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING(60)
        },
        ranking: {
            allowNull: false,
            type: dataTypes.INTEGER
        },       
    };

    const Genre = sequelize.define(alias, columns,  {timestamps: false});
    return Genre;
}