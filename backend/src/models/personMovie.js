const { Model, DataTypes } = require('sequelize');

class PersonMovie extends Model {
    static init(sequelize) {
        super.init({
            personRule: DataTypes.ENUM(['actor', 'director', 'writer']),
        }, {
            sequelize,
            tableName: 'person_movie'
        });
    }

    static associate(models) {
        this.belongsTo(models.Movies, { foreignKey: 'movieId' });
        this.belongsTo(models.Person, { foreignKey: 'personId' });
      }
}

module.exports = PersonMovie;