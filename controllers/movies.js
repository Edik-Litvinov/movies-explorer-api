const MoviesModal = require('../models/movie');
const { ErrorNotFound } = require('../errors/ErrorNotFound');
const { DeleteMovieError } = require('../errors/DeleteMovieError');
const { errorHandler } = require('../errors/errorHandler');

const getMovies = (req, res, next) => {
  const { _id } = req.user;
  MoviesModal.find({ owner: _id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const postMovie = (req, res, next) => {
  const { _id } = req.user;
  const {
    country, director, duration, year, description, image,
    trailer, nameRU, nameEN, thumbnail, movieId,
  } = req.body;
  MoviesModal.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: _id,
  })
    .then((film) => res.send(film))
    .catch((err) => errorHandler(err, next));
};

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  const { _id } = req.user;
  MoviesModal.findById(movieId)
    .orFail(() => {
      throw new ErrorNotFound('Такого фильма в базе нет');
    })
    .then((movie) => {
      if (JSON.stringify(movie.owner) !== JSON.stringify(_id)) {
        throw new DeleteMovieError('Удалять можно только свои фильмы');
      } else {
        movie.remove()
          .then((film) => {
            res.send({ message: `фильм ${film.id} удален` });
          })
          .catch(next);
      }
    })
    .catch(next);
};

module.exports = {
  getMovies,
  postMovie,
  deleteMovie,
};
