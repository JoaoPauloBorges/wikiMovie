const Movies = require('../models/movies');
const Person = require('../models/person');
const PersonMovie = require('../models/personMovie');

exports.create = async (body) => {
    body.imgUrl = "https://play.google.com/store/movies/details/Coco?id=UVFVtJcxXWE&hl=en_US";
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