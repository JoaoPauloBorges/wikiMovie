const express =  require('express');
const MovieController = require('../../controllers/movie.controller');

const router = express.Router();

router.post('/', async (req, resp) => {
   const {name, sinopse, year} = req.body;
   const user = await MovieController.create({name, sinopse, year});
   resp.json(user);
});

router.get('/', async (req, resp) => {
    const users = await MovieController.list();
    resp.json(users);
 });

module.exports = router;