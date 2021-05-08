const routerRegistration = require('express').Router();
const { registrationUser } = require('../controllers/signup');
const { signUpValidationBody } = require('../middlewares/validation');

routerRegistration.post('/signup', signUpValidationBody, registrationUser);

module.exports = {
  routerRegistration,
};
