const Sequelize = require('sequelize');
const config = require('../config/database');
const Movies = require('../models/movies');
const Person = require('../models/person');
const PersonMovies = require('../models/personMovie');

const conn = new Sequelize(config);

Person.init(conn);
Movies.init(conn);
PersonMovies.init(conn);

Person.associate(conn.models);
Movies.associate(conn.models);
PersonMovies.associate(conn.models);

module.exports = conn;
