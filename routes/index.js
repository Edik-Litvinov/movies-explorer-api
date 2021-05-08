const allRoutes = require('express').Router();
const { routerUsers } = require('./users');
const { routerMovies } = require('./movies');
const { ErrorNotFound } = require('../errors/ErrorNotFound');
const { routerRegistration } = require('./signup');
const { routerAutorization } = require('./signin');
const { auth } = require('../middlewares/auth');

allRoutes.use('/', routerRegistration);
allRoutes.use('/', routerAutorization);

allRoutes.use(auth);
allRoutes.use('/users', routerUsers);
allRoutes.use('/movies', routerMovies);
allRoutes.use('*', () => {
  throw new ErrorNotFound('Запрашиваемый ресурс не найден');
});

module.exports = allRoutes;
