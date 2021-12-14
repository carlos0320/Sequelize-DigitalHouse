module.exports = (sequelize, DataTypes) => {
    const alias = "movies"
    const columns = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING(500),
        awards: DataTypes.INTEGER,
        rating: DataTypes.DECIMAL,
        length: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
    }
    
    const Movie = sequelize.define(alias, columns, {timestamps: false})
    return Movie
}