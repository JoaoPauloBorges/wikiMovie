const { Movie }  = require('../models');

exports.create = async ({name, sinopse, year}) => {
    const movie = await Movie.create({name, sinopse, year});
    return movie;
}

exports.list = async () => {
    const movies = await Movie.findAll();
    return movies;
}