const { Model, DataTypes } = require('sequelize');

class Person extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      bornAt: DataTypes.DATEONLY,
      bio: DataTypes.STRING,

    }, {
      sequelize,
      tableName: 'person'
    });
  }

  static associate(models) {
    this.belongsToMany(models.Movies, { foreignKey: 'personId', through: 'person_movie', as: 'movies' });
  }
}

module.exports = Person;