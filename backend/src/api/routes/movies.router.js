const express = require('express');
const MoviesController = require('../../controllers/movies.controller');

const router = express.Router();

router.post('/', async (req, resp) => {
   console.log('aqui')
   const movie = await MoviesController.create(req.body)
      .catch(err => { console.log(err); resp.status(400) });

   resp.json(movie);
});

router.get('/', async (req, resp) => {
   const movies = await MoviesController.list()
      .catch(err => { console.log(err); resp.status(500) });

   resp.json(movies);
});

router.get('/:movieId', async (req, resp) => {
   const movies = await MoviesController.findById(req.params.movieId)
      .catch(err => { console.log(err); resp.status(400) });

   resp.json(movies);
});

router.post('/:movieId/actor', async (req, resp) => {
   const movie = await MoviesController.associateActor(req.body, req.params.movieId)
      .catch(err => { console.log(err); resp.status(400) });
   resp.json(movie);
});

router.post('/:movieId/director', async (req, resp) => {
   const movie = await MoviesController.associateDirector(req.body, req.params.movieId)
      .catch(err => { console.log(err); resp.status(400) });

   resp.json(movie);
});

router.post('/:movieId/writer', async (req, resp) => {
   const movie = await MoviesController.associateWriter(req.body, req.params.movieId)
      .catch(err => { console.log(err); resp.status(400) });

   resp.json(movie);
});

module.exports = router;