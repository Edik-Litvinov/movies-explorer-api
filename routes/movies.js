const routerMovies = require('express').Router();
const { getMovies, postMovie, deleteMovie } = require('../controllers/movies');
const { movieValidationBody, movieValidationParams } = require('../middlewares/validation');

routerMovies.get('/', getMovies);
routerMovies.post('/', movieValidationBody, postMovie);
routerMovies.delete('/:movieId', movieValidationParams, deleteMovie);

module.exports = {
  routerMovies,
};
