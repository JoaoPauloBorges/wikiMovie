const Movies = require('../models/movies');
const Person = require('../models/person');
const PersonMovie = require('../models/personMovie');
const { Op } = require("sequelize");


exports.create = async (body) => {
    const movie = await Movies.create({ ...body });
    return movie;
}

exports.list = async () => {
    const movies = await Movies.findAll();
    return movies;
}

exports.findById = async (idOrName) => {
    let parsed = parseInt(idOrName);
    if (!isNaN(parsed)) {
        console.log('aqui')
        const movie = await Movies.findByPk(idOrName, {
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
                { association: 'director', attributes: { exclude: ["createdAt", "updatedAt"] }, through: { where: { 'personRule': 'director' }, attributes: [] } },
                { association: 'actors', attributes: { exclude: ["createdAt", "updatedAt"] }, through: { where: { 'personRule': 'actor' }, attributes: [] } },
                { association: 'writer', attributes: { exclude: ["createdAt", "updatedAt"] }, through: { where: { 'personRule': 'writer' }, attributes: [] } }
            ]
        });
        return movie;
    }

    const movies = await Movies.findAll({ where: {name: {[Op.like]: '%'+idOrName+'%'}},
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
            { association: 'director', attributes: { exclude: ["createdAt", "updatedAt"] }, through: { where: { 'personRule': 'director' }, attributes: [] } },
            { association: 'actors', attributes: { exclude: ["createdAt", "updatedAt"] }, through: { where: { 'personRule': 'actor' }, attributes: [] } },
            { association: 'writer', attributes: { exclude: ["createdAt", "updatedAt"] }, through: { where: { 'personRule': 'writer' }, attributes: [] } }
        ]
    });
    return movies;
}

exports.update = async (body, movieId) => {

    const [movies] = await Movies.update(
        { ...body },
        { returning: true, where: { id: movieId } }
    );
    return movies[0];
}

exports.delete = async (movieId) => {
    const number = await Movies.destroy({
        where: {
            id: movieId
        }
    })
    return number;
}

const associateRule = async (rule, body, movieId) => {
    const movie = await Movies.findByPk(movieId);
    if (!movie) {
        throw "invalid movieId!";
    }

    let person;
    if (!!body.id) {
        person = await Person.findByPk(body.id);
        if (!!person) {
            await person.update(body)
        } else {
            person = await Person.create({ ...body })
        }
    }

    args = { personId: person.id, movieId: movieId, personRule: rule };

    let personMovie = await PersonMovie.findOne({ where: { ...args } });
    if (!!personMovie) {
        await personMovie.update(args);
    } else {
        personMovie = await PersonMovie.create({ ...args })
        console.log({ criadooo: personMovie });
    }

    return this.findById(movieId);
}

exports.associateActor = async (actor, movieId) => {
    return await associateRule('actor', actor, movieId);
}
exports.associateDirector = async (director, movieId) => {
    return await associateRule('director', director, movieId);
}
exports.associateWriter = async (director, movieId) => {
    return await associateRule('writer', director, movieId);
}