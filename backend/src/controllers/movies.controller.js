const Movies = require('../models/movies');
const Person = require('../models/person');
const PersonMovie = require('../models/personMovie');

exports.create = async (body) => {
    body.imgUrl = "https://lh3.googleusercontent.com/gLt2AMr-UTklFkPigQ6PiAWnfCXUHF5Mp_M1rJwSPnUzFQIhZ7J3nK1SQwR-6Ve_Bac7=w400-h600-rw";
    const movie = await Movies.create({...body});
    return movie;
}

exports.list = async () => {
    const movies = await Movies.findAll();
    return movies;
}

exports.findById = async (id) => {
    const movie = await Movies.findByPk(id, {
        attributes: {exclude: ["createdAt", "updatedAt"]},
        include: [
            {association: 'director', attributes: {exclude: ["createdAt", "updatedAt"]}, through: { where: {'personRule': 'director'}, attributes: [] }},
            {association: 'actors', attributes: {exclude: ["createdAt", "updatedAt"]}, through: { where: {'personRule': 'actor'}, attributes: []}},
            {association: 'writer', attributes: {exclude: ["createdAt", "updatedAt"]}, through: { where: {'personRule': 'writer'}, attributes: []}}
        ]
    });
    return movie;
}

exports.update = async(body, movieId) => {
    if (movieId != body.id && !await Movies.findByPk(body.id)) {
        throw "invalid movieId!";
    }

    const [ movie ] = await Movies.upsert({...body})
    return movie;
}

exports.delete = async(movieId) => {
    const number = await Movies.destroy({where: {
        id: movieId
    }})
    return number;
}

const associateRule = async (rule, body, movieId) => {
    const movie = await Movies.findByPk(movieId);
    if (!movie) {
        throw "invalid movieId!";
    }
    const [person] = await Person.findOrCreate({
        where:
            { ...body }
    });

    await PersonMovie.create({
        personId: person.id,
        movieId: movieId,
        personRule: rule,
    })

    return this.findById(movieId);
}

exports.associateActor = async(actor, movieId) => {
    return await associateRule('actor', actor, movieId);
}
exports.associateDirector = async (director, movieId) => {
    return await associateRule('director', director, movieId);
}
exports.associateWriter = async (director, movieId) => {
    return await associateRule('writer', director, movieId);
}