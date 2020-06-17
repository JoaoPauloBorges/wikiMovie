'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('person_movie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personRule: {
        type: Sequelize.ENUM(['actor', 'director','writer'])
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: { model: 'movies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      personId: {
        type: Sequelize.INTEGER,
        references: { model: 'person', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('person_movie');
  }
};
