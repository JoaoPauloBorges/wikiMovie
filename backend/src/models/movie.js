'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    sinopse: DataTypes.STRING,
    year: DataTypes.DATEONLY
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};