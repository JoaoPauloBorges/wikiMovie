const { Model, DataTypes } = require('sequelize');

class Movies extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      sinopse: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      year: DataTypes.DATEONLY,
    }, {
      sequelize,
      tableName: 'movies'
    });
  }

  static associate(models) {
    this.belongsToMany(models.Person, { foreignKey: 'movieId', through: 'person_movie', as: 'actors' });
    this.belongsToMany(models.Person, { foreignKey: 'movieId', through: 'person_movie', as: 'director' });
    this.belongsToMany(models.Person, { foreignKey: 'movieId', through: 'person_movie', as: 'writer' });
  }
}

module.exports = Movies;