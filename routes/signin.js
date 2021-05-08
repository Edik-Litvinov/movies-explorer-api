const routerAutorization = require('express').Router();
const { login } = require('../controllers/signin');
const { signInValidationBody } = require('../middlewares/validation');

routerAutorization.post('/signin', signInValidationBody, login);

module.exports = {
  routerAutorization,
};
